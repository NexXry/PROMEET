from fastapi import HTTPException, Depends
from pydantic import BaseModel, EmailStr
from fastapi import FastAPI
from starlette import status
from database import connect, initialize_db, recherche_dans_la_base, findUserById, findUserByEmail, createUser
from src.auth_bearer import JWTBearer
from src.model.Token import TokenSchema, auth, TokenData
from src.model.User import User
from fastapi.middleware.cors import CORSMiddleware
from src.utils import (
    get_hashed_password,
    create_access_token,
    create_refresh_token,
    verify_password, deserialize_token
)
from src.model.Formulaire import Formulaire

app = FastAPI()
conn = connect()
cursor = conn.cursor()

origins = [

    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    initialize_db()


@app.get("/recherche")
async def recherche(q: str):
    result = recherche_dans_la_base(q)
    return {'find': result}


@app.post("/send_email")
async def send_email(formulaire: Formulaire):
    lastname = formulaire.lastname
    firstname = formulaire.firstname
    email = formulaire.email
    phone_number = formulaire.phoneNumber
    message = formulaire.message
    return {"message": "Données du formulaire traitées avec succès"}

@app.get("/users/{userId}")
async def create_user(userId: int):
    user = findUserById(userId)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.post("/create-users")
async def create(user: User):
    result = createUser(user)
    if result is False:
        raise HTTPException(status_code=401, detail="Unable to create user")
    return result


@app.post('/auth', response_model=TokenSchema)
async def login(form_data: auth):
    user = findUserByEmail(form_data.username)
    print(user)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )

    hashed_pass = user['mdp']
    if not verify_password(form_data.password, hashed_pass):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )

    return {
        "access_token": create_access_token(user['email'] + "," + user['role']),
        "refresh_token": create_refresh_token(user['email']),
    }
    return  user

