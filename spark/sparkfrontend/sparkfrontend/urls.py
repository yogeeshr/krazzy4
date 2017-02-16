from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^sparke2e/', include('sparke2e.urls')),
    url(r'^admin/', admin.site.urls),
]