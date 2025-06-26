Estrutura e instruções para rodar localmente:

```bash
# copiar .env e ajustar
cp .env.example .env

# criar venv e ativar
python -m venv .venv
source .venv/bin/activate

# instalar dependências
pip install -r requirements.txt

# rodar em dev
uvicorn app.main:app --reload --port 8000
```

Deploy via Docker:

```bash
docker build -t oriapsi-backend .
docker run -d -p 8000:8000 --env-file .env oriapsi-backend
