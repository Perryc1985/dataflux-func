# -*- coding: utf-8 -*-

# Built-in Modules

# 3rd-party Modules
import requests

# Project Modules
from . import parse_response

class HTTPHelper(object):
    REQUESTS_OPT = { 'verify': False }

    def __init__(self):
        pass

    def get(self, url, timeout=3):
        r = requests.get(url, timeout=timeout, **REQUESTS_OPT)
        parsed_resp = parse_response(r)

        if r.status_code >= 400:
            e = Exception(r.status_code, r.text)
            raise e

        return parsed_resp

    def post(self, url, data, timeout=3):
        r = requests.post(url, data=data, timeout=timeout, **REQUESTS_OPT)
        parsed_resp = parse_response(r)

        if r.status_code >= 400:
            e = Exception(r.status_code, r.text)
            raise e

        return parsed_resp
