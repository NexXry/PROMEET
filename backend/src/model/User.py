from typing import List

from passlib.context import CryptContext
from pydantic import BaseModel


class User(BaseModel):
    nom: str
    prenom: str
    email: str
    mdp: str
    telephone: str


class UpdateUser(BaseModel):
    nom: str
    prenom: str
    email: str
    telephone: str
    description: str
    competences: List[str]
    profession: str
    sous_domaine: str
    domaine: str
    entreprise: str
