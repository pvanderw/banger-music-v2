from django.db import models
from backend.accounts.models import UserProfile
from backend.banger_music.models import UUIDModel


class Blog(UUIDModel):
    author = models.ForeignKey(
        UserProfile, related_name="blogs", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255)
    description = models.TextField()
    followers = models.ManyToManyField(UserProfile, related_name="followed_blogs")
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{} - {}".format(self.author, self.title)


class Post(UUIDModel):
    blog = models.ForeignKey(
        Blog, related_name="blog_posts", on_delete=models.CASCADE
    )
    author = models.ForeignKey(
        UserProfile, related_name="posts", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255)
    text = models.TextField()
    likes = models.IntegerField(default=0)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}: {}".format(self.title, self.date_created)


class Comment(UUIDModel):
    post = models.ForeignKey(
        Post, related_name="post_comments", on_delete=models.CASCADE
    )
    author = models.ForeignKey(
        UserProfile, related_name="comments", on_delete=models.CASCADE
    )
    text = models.CharField(max_length=255)
    likes = models.IntegerField(default=0)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}: {}".format(self.author, self.date_created)
