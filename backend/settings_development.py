from backend.settings_common import *  # noqa: F401,F403

DEBUG = True

# Necessary to make React front-end work with Django
CORS_ALLOWED_ORIGINS = [
    'http://localhost:8000',
    'http://localhost:3000',
]

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-4_!y#@++oafvch!!enaf&5jd0^q7@7ooqroq_&$98ca6_4zl(n'
