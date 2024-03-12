from django.db import models
from django.contrib.auth.models import User
from slugify import slugify


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='名称')
    description = models.TextField(blank=True, verbose_name='描述')

    class Meta:
        verbose_name = '分类'
        verbose_name_plural = '分类'

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='名称')

    class Meta:
        verbose_name = '标签'
        verbose_name_plural = '标签'

    def __str__(self):
        return self.name


class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', '草稿'),
        ('published', '已发布'),
    )

    title = models.CharField(max_length=200, verbose_name='标题', unique=True)
    slug = models.SlugField(max_length=200, unique_for_date='publish_date', verbose_name='Slug')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts', verbose_name='作者')
    content = models.TextField(verbose_name='内容')
    publish_date = models.DateTimeField(auto_now_add=True, verbose_name='发布日期')
    last_updated = models.DateTimeField(auto_now=True, verbose_name='最后更新')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft', verbose_name='状态')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='posts', verbose_name='分类')
    tags = models.ManyToManyField(Tag, related_name='posts', verbose_name='标签')

    class Meta:
        ordering = ('-publish_date',)
        verbose_name = '博文'
        verbose_name_plural = '博文'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Post, self).save(*args, **kwargs)


class Image(models.Model):
    title = models.CharField(max_length=200, verbose_name='标题')
    image = models.ImageField(upload_to='images/', verbose_name='图片')
    slug = models.SlugField(max_length=200, unique=True, verbose_name='Slug',
                            help_text='用于在Markdown中引用的唯一标识符')
    description = models.TextField(blank=True, verbose_name='描述')
    uploaded_at = models.DateTimeField(auto_now_add=True, verbose_name='上传日期')

    class Meta:
        verbose_name = '图片'
        verbose_name_plural = '图片'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # 自动生成slug，如果没有提供slug，则从标题生成
        self.slug = slugify(self.title)
        super(Image, self).save(*args, **kwargs)
