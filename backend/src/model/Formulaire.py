from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

class Formulaire(BaseModel):
    lastname: str
    firstname: str
    email : str
    phoneNumber : str
    message : str

    