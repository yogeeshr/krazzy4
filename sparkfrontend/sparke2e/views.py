#!/usr/bin/env python
# -*- coding: utf-8 -*-

import requests
import json
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.conf import settings as djangoSettings
from datetime import datetime
import time


# def validation_page(request):
#     return render(request, 'sparkfrontend.html')

def images_to_video(request):
    return render(request, 'spark.html')

def generate_video(request):
    information = str(request.POST.get('info',''));
    json_info = json.loads(information)
    audiourl = json_info['audiourl'];
    campaignname = json_info['campaignname'];
    numberofimages = json_info['numberofimages'];

    #print json_info['assetsJsonArray'][0]['weight'];

    asset = {};
    response = {};
    imageAssetCombined = []
    campaignAudio=str(campaignname)+'$'+str(audiourl)
    imageAssetCombined.append(campaignAudio);
    fixedUrl="http://localhost:8000/static/html/"
    try:
        for asset in json_info['assetsJsonArray']:
            millis = int(round(time.time() * 1000))
            filename = str(campaignname)+str(millis)
            file=open(djangoSettings.STATIC_ROOT_HTML+str(campaignname)+str(millis)+'.html','w');
            file.write(asset['html']);
            file.close()
            weight = asset['weight'];
            url = fixedUrl + filename + '.html'
            imageasset = '$'+url+'^'+weight
            imageAssetCombined.append(imageasset);
        finalOutput = ''.join(imageAssetCombined);
        print finalOutput

        # json_data = json.dumps(data)
        headers = {'content-type': 'application/json'}
        url = 'http://localhost:9099/Spark/api/getVideoFile'

        response = requests.post(url, data=finalOutput, headers=headers)

        print response
        return HttpResponse(response, content_type='application/json', status=200)
    except Exception as e:
        print 'exception : ',e

        return HttpResponse(e, content_type='application/json', status=500)
