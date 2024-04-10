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
    description: str | None
    competences: List[int] | List[str] | None
    profession: int | str | None
    sous_domaine: int | str | None
    domaine: int | str | None
    entreprise: int | str | None
