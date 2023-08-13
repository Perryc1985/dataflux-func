# -*- coding: utf-8 -*-

# Built-in Modules
import os
import time
import signal

# 3rd-party Modules

# Project Modules
from worker import run_background
from worker.utils import yaml_resources, toolkit

# Configure
BASE_PATH  = os.path.dirname(os.path.abspath(__file__))
CONFIG     = yaml_resources.load_config(os.path.join(BASE_PATH, '../config.yaml'))
CONST      = yaml_resources.load_file('CONST', os.path.join(BASE_PATH, '../const.yaml'))
IMAGE_INFO = yaml_resources.load_file('IMAGE_INFO', os.path.join(BASE_PATH, '../image-info.json'))

# Init
from worker.app_init import before_app_create, after_app_created
before_app_create()

from worker.utils.log_helper import LogHelper
from worker.utils.extra_helpers import RedisHelper

LOGGER = LogHelper()
REDIS  = RedisHelper(logger=LOGGER)
REDIS.skip_log = True

from worker.tasks import list_matched_crontab_tasks

class TickTimeoutException(Exception):
    pass

def handle_sigalarm(self, signum, frame):
    e = TickTimeoutException(f'Tick Timeout')
    raise e

def tick():
    '''
    定时触发器（每秒触发）

    1. 获取已注册的，当前时间满足 Crontab 表达式的任务
    2. 到达执行时间的延迟任务进入工作队列
    '''
    tick_time = time.time()

    # 限制执行时长
    signal.signal(signal.SIGALRM, handle_sigalarm)
    signal.alarm(15)

    # 记录运行时间
    REDIS.incr(toolkit.get_cache_key('beat', 'tick'))

    # 分发配置了 Crontab 的任务
    tasks = list_matched_crontab_tasks(tick_time, tz=CONFIG['TIMEZONE'])
    for task in tasks:
        # 创建任务请求
        task_instance = task(trigger_time=tick_time)
        task_req = task_instance.create_task_request()
        task_req_dumps = toolkit.json_dumps(task_req, ignore_nothing=True, indent=None)

        # 任务入队
        if task_req['delay']:
            # 延迟任务
            cache_key = toolkit.get_delay_queue(task_req['queue'])
            eta = task_req['triggerTime'] + task_req['delay']
            REDIS.zadd(cache_key, eta, task_req_dumps)

        else:
            # 立即任务
            cache_key = toolkit.get_worker_queue(task_req['queue'])
            REDIS.lpush(cache_key, task_req_dumps)

    # 延迟任务进入工作队列
    for queue in range(CONFIG['_WORKER_QUEUE_COUNT']):
        src_cache_key  = toolkit.get_delay_queue(queue)
        dest_cache_key = toolkit.get_worker_queue(queue)

        while True:
            cache_res = REDIS.zpop_below_lpush(src_cache_key, dest_cache_key, tick_time)
            if not cache_res:
                break

    # 计算距离下一秒时长
    wait_time = 1 - tick_time % 1
    time.sleep(wait_time)

if __name__ == '__main__':
    # 打印提示信息
    pid = os.getpid()

    print(f'Beat is running (Press CTRL+C to quit)')
    print(f'PID: {pid}')
    print('Have fun!')

    # 启动后台
    run_background(func=tick, pool_size=1, max_tasks=100)
