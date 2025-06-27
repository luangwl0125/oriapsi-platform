# app/core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    stripe_api_key: str
    stripe_webhook_secret: str

    model_config = {
        "env_file": ".env",
        # se tiver campos de modelo usando orm_mode, substitua por from_attributes:
        "from_attributes": True,
    }

settings = Settings()
