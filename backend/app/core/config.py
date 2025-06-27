from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    stripe_secret_key: str
    stripe_webhook_secret: str

    model_config = {
        "env_file": ".env",
        "from_attributes": True,
    }

settings = Settings()
