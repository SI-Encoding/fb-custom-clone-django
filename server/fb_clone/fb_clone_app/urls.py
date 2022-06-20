from django.urls import re_path
from fb_clone_app import views 
 
urlpatterns = [ 
    re_path(r'^api/post$', views.posts_collection),
    re_path(r'^api/post/(?P<pk>[0-9]+)$', views.post_document),
    re_path(r'^api/others/posts/(?P<user_id>[0-9]+)$', views.fetch_others_posts),
    re_path(r'^api/gif/posts$', views.fetch_gif_posts),
    re_path(r'^api/your/posts/(?P<user_id>[0-9]+)$', views.fetch_your_posts)
]