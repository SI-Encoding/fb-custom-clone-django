from django.db import models

# Create your models here.

class Post(models.Model):
    message = models.CharField(max_length=70, blank=True, default='')
    profilePic = models.CharField(max_length=200,blank=False, default='')
    username = models.CharField(max_length=200,blank=False, default='')
    favourite = models.CharField(max_length=5,blank=True,default="false")
    gif = models.CharField(max_length=5,blank=True,default="false")
    image = models.CharField(max_length=200,blank=True, default='')
    userId= models.CharField(max_length=200,blank=False, default='')
    createdAt = models.DateTimeField(auto_now_add=True)