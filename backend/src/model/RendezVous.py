from typing import List
from pydantic import BaseModel

class RendezVous(BaseModel):
    personne_id: int
    personne_pro_id: int
    date: str
    heure_debut: str
    heure_fin: str
    message: str
    etat: str



