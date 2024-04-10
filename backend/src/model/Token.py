from pydantic import BaseModel


class auth(BaseModel):
    username: str
    password: str


class TokenSchema(BaseModel):
    access_token: str
    refresh_token: str


class TokenData(BaseModel):
    token: str
