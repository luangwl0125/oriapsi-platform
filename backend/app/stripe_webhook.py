import stripe
from fastapi import APIRouter, Request, HTTPException
from app.core.config import settings

stripe.api_key = settings.stripe_secret_key
router = APIRouter(prefix="/webhook", tags=["stripe"])

@router.post("")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")
    try:
        event = stripe.Webhook.construct_event(payload, sig_header, settings.stripe_webhook_secret)
    except stripe.error.SignatureVerificationError:
        raise HTTPException(status_code=400, detail="Invalid signature")
    # trate event.type como subscription.created, invoice.paid etc.
    return {"status": "success"}