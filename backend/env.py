import os
from pathlib import Path

from dotenv import load_dotenv

env_path = f"./.env"
load_dotenv(dotenv_path=f"{env_path}")

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
DATABASE_URL = os.environ.get("DATABASE_URL")
APP_ENV = os.environ.get("APP_ENV")