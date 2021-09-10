from django.apps import AppConfig


class BangerMusicConfig(AppConfig):
    name = 'banger_music'

    def ready(self):
        import accounts.signals
