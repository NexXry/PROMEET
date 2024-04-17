from sqlite3 import Date
from datetime import date, time  # Import correct types
#from datetime import time
from typing import List

from passlib.context import CryptContext
from pydantic import BaseModel

class Rdv(BaseModel):
    personne_id: int
    personne_pro_id: int
    date: Date
    heure_debut: time
    heure_fin: time
    etat:str 
    message: str
