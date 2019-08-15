from django.db import models

from hamradio.radioamateur.models import RadioAmateur


class Article(models.Model):
    title = models.CharField(max_length=300)
    content = models.CharField(max_length=10000)
    created_at = models.DateField(auto_now=True)
    author = models.ForeignKey(RadioAmateur, on_delete=models.CASCADE)
    description = models.CharField(max_length=500, null=True, blank=True)
