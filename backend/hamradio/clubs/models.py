from django.db import models

from hamradio.radioamateur.models import RadioAmateur


class Club(models.Model):
    title = models.CharField(max_length=200)
    members = models.ManyToManyField(RadioAmateur, related_name='members_radioamateur')
