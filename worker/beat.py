# -*- coding: utf-8 -*-

# Built-in Modules
import os
import time
import signal

# 3rd-party Modules

# Project Modules
from worker import run_background
from worker.utils import yaml_resources, toolkit

# Init
from worker.app_init import before_app_create, after_app_created
before_app_create()

from worker.utils.log_helper import LogHelper
from worker.utils.extra_helpers import RedisHelper

CONFIG = yaml_resources.get('CONFIG')

LOGGER = LogHelper()
REDIS  = RedisHelper(logger=LOGGER)
REDIS.skip_log = True

from worker import get_matched_crontab_task_instances

class TickTimeoutException(Exception):
    pass

def tick():
    '''
    定时触发器（每秒触发）

    1. 获取已注册的，当前时间满足 Crontab 表达式的任务
    2. 到达执行时间的延迟任务进入工作队列
    '''
    tick_time = toolkit.get_timestamp(3)

    # 默认限制执行时长
    signal.alarm(60)

    # 记录运行时间
    REDIS.incr(toolkit.get_cache_key('beat', 'tick'))

    # 分发配置了 Crontab 的任务
    task_instances = get_matched_crontab_task_instances(tick_time, tz=CONFIG['TIMEZONE'])
    for task_inst in task_instances:
        # 创建任务请求
        task_req = task_inst.create_task_request()
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

def handle_sigalarm(self, signum, frame):
    e = TickTimeoutException(f'Tick Timeout')
    raise e

if __name__ == '__main__':
    # 注册 SIGALRM 处理函数
    signal.signal(signal.SIGALRM, handle_sigalarm)

    # 打印提示信息
    pid = os.getpid()

    print(f'Beat is running (Press CTRL+C to quit)')
    print(f'PID: {pid}')
    print('Have fun!')

    # 启动后台
    run_background(func=tick, pool_size=1, max_tasks=100)
