from rest_framework import serializers 
from fb_clone_app.models import Post
 
 
class PostSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Post
        fields = ('id',
                  'message',
                  'profilePic',
                  'username',
                  'gif',
                  'image',
                  'userId',
                  'createdAt'
                  )