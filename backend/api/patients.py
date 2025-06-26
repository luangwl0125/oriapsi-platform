from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.crud import patient as crud
from app.schemas.patient import Patient, PatientCreate
from app.api.deps import get_db

router = APIRouter(prefix="/patients", tags=["patients"])

@router.post("/", response_model=Patient)
def create_patient_api(patient_in: PatientCreate, db: Session = Depends(get_db)):
    return crud.create_patient(db, patient_in)

@router.get("/", response_model=list[Patient])
def list_patients(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_patients(db, skip, limit)

@router.get("/{patient_id}", response_model=Patient)
def get_patient_api(patient_id: int, db: Session = Depends(get_db)):
    db_obj = crud.get_patient(db, patient_id)
    if not db_obj:
        raise HTTPException(status_code=404, detail="Patient not found")
    return db_obj