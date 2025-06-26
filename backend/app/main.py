from fastapi import FastAPI
from app.db.session import engine
from app.db.base import Base
from app.api import patients
from app.stripe_webhook import router as stripe_router

# cria tabelas
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Oriapsi API")
app.include_router(patients.router)
app.include_router(stripe_router)

@app.get("/")
def root():
    return {"message": "Olá, Oriapsi API!"}