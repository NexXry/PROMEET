from passlib.context import CryptContext
from pydantic import BaseModel


class User(BaseModel):
    nom: str
    prenom: str
    email: str
    mdp: str
    telephone: str
