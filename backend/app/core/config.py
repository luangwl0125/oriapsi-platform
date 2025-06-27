from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    stripe_secret_key: str
    stripe_webhook_secret: str

    class Config:
        env_file = "../.env"

settings = Settings()
