from django.shortcuts import render, get_object_or_404
from .models import Post, Category, Tag


def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug, status='published')
    return render(request, 'blog/post_detail.html', {'post': post})


def home(request):
    posts = Post.objects.filter(status='published').order_by('-publish_date')
    return render(request, 'blog/home.html', {'posts': posts})


def category_posts(request, category_slug):
    category = get_object_or_404(Category, slug=category_slug)
    posts = Post.objects.filter(category=category, status='published')
    return render(request, 'blog/category_posts.html', {'category': category, 'posts': posts})


def tag_posts(request, tag_slug):
    tag = get_object_or_404(Tag, slug=tag_slug)
    posts = Post.objects.filter(tags=tag, status='published')
    return render(request, 'blog/tag_posts.html', {'tag': tag, 'posts': posts})
