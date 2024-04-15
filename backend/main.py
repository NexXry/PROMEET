from fastapi import HTTPException, Depends
from fastapi import FastAPI
from starlette import status
from database import connect, initialize_db, retourner_domaines, findUserById, findUserByEmail, createUser, \
    updateUserById, findAllDomaines, findAllSousDomaines, findAllCompetences, findAllProfessions, findAllEntreprises, \
    recherche_dans_la_base, delUserById, findRdvById
from src.auth_bearer import JWTBearer
from src.model.Token import TokenSchema, auth, TokenData
from src.model.User import User, UpdateUser
from src.model.User import User
from fastapi.middleware.cors import CORSMiddleware
from src.utils import (
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


@app.get("/domaine")
async def domaine():
    result = retourner_domaines()
    return {'find': result}


@app.post("/send_email")
async def send_email(formulaire: Formulaire):
    lastname = formulaire.lastname
    firstname = formulaire.firstname
    email = formulaire.email
    phone_number = formulaire.phoneNumber
    message = formulaire.message
    return {"message": "Données du formulaire traitées avec succès"}


@app.get("/users/{userId}", response_model=UpdateUser)
async def create_user(userId: int):
    user = findUserById(userId)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    if 'competences' in user:
        if user['competences'] is None:
            user['competences'] = []
        else:
            user['competences'] = user['competences'].split(',')

    if 'profession' in user and user['profession'] is None:
        user['profession'] = None

    return user


@app.put('/update-users/{userId}', response_model=UpdateUser)
async def update_user(userId: int, user: UpdateUser, token: TokenData = Depends(JWTBearer())):
    extracted_token = deserialize_token(token)
    id = extracted_token['sub'].split(',')[0]
    if str(id) != str(userId):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="You are not authorized to perform this action"
        )
    user = updateUserById(userId, user)
    print(user)
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
        "access_token": create_access_token(str(user['id']) + "," + user['email'] + "," + user['role']),
        "refresh_token": create_refresh_token(user['id']),
    }
    return user


@app.get('/lists')
async def get_allInfo():
    return {
        'sous_domaine': findAllSousDomaines(),
        'competences': findAllCompetences(),
        'profession': findAllProfessions(),
        'entreprise': findAllEntreprises()
    }


@app.delete('/delete-users/{userId}')
async def delete_user(userId: int, token: TokenData = Depends(JWTBearer())):
    extracted_token = deserialize_token(token)
    role = extracted_token['sub'].split(',')[2]
    if role != "admin":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="You are not authorized to perform this action"
        )
    user = findUserById(userId)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    delUserById(userId)
    return {"message": "User deleted successfully"}

@app.get('/rendez_vous/{userId}')
async def get_rendez_vous(userId: int):
    user = findUserById(userId)
    if user is None :
        raise HTTPException(status_code=404, detail="User not found")
    
    result = findRdvById(userId)
    return {'find': result}
    