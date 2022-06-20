from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from fb_clone_app.models import Post
from fb_clone_app.serializers import PostSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def posts_collection(request):
    # GET list of posts, POST a new post

    if request.method == 'GET':
        posts = Post.objects.order_by('-createdAt')
        
        posts_serializer = PostSerializer(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False)
 
    elif request.method == 'POST':
            post_data = JSONParser().parse(request)
            post_serializer = PostSerializer(data=post_data)
            if post_serializer.is_valid():
                post_serializer.save()
                return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED) 
            return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def post_document(request, pk):
    # find post by pk (id)
    try: 
        post = Post.objects.get(pk=pk) 
    except Post.DoesNotExist: 
        return JsonResponse({'message': 'Could not find the post requested'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE post
    if request.method == 'GET': 
        post_serializer = PostSerializer(post) 
        return JsonResponse(post_serializer.data)
    
    elif request.method == 'PUT': 
        post_data = JSONParser().parse(request) 
        post_serializer = PostSerializer(post, data=post_data) 
        if post_serializer.is_valid(): 
            post_serializer.save() 
            return JsonResponse(post_serializer.data) 
        return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    elif request.method == 'DELETE': 
        post.delete() 
        return JsonResponse({'message': 'Post was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def fetch_your_posts(request, user_id):
    # GET all your posts
    posts = Post.objects.filter(userId=user_id).order_by('-createdAt')
        
    if request.method == 'GET': 
        posts_serializer = PostSerializer(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False)

@api_view(['GET'])
def fetch_others_posts(request, user_id):
    # GET all posts that are not yours
    posts = Post.objects.exclude(userId=user_id).order_by('-createdAt')
        
    if request.method == 'GET': 
        posts_serializer = PostSerializer(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False)

@api_view(['GET'])
def fetch_gif_posts(request):
    # GET all posts that contain gifs

     if request.method == 'GET':
        # posts = Post.objects.all()
        posts = Post.objects.filter(gif='true').order_by('-createdAt')
         
        posts_serializer = PostSerializer(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False)