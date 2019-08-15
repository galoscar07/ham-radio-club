from django.db import models


# Create your models here.
class RadioAmateur(models.Model):
    first_name = models.CharField(max_length=500, verbose_name='prenume')
    last_name = models.CharField(max_length=500, verbose_name='nume')
    operator = models.CharField(max_length=500, null=True, blank=True)
    authorization_class = models.CharField(max_length=50)
    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
