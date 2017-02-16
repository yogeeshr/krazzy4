#!/usr/bin/env python
# -*- coding: utf-8 -*-

import requests
import json
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from datetime import datetime

# def validation_page(request):
#     return render(request, 'sparkfrontend.html')

def images_to_video(request):
    return render(request, 'spark.html')

