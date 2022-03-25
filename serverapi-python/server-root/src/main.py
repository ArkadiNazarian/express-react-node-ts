from datetime import datetime
from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import traceback
from pydantic import BaseModel
import json

app = FastAPI()
origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET","POST","PUT","PATCH","DELETE","OPTIONS","HEAD"],
    allow_headers=["Origin",
                   "Accept",
                   "Content-Type",
                   "Authorization"],
)


@app.get("/lastcheck")
def lastcheck():
    date = datetime.now()
    return {"lastcheck": date}


class LoginRequest(BaseModel):
    email_address: str
    password: str


@app.post("/login")
def login(api_request: LoginRequest):
    try:
        expected_request = {
            "email_address": "first.last@company.xyz",
            "password": "123"
        }
        if expected_request["email_address"] == api_request.email_address and expected_request["password"] == api_request.password:
            return "authentication is succeed"
        else:
            return "authentication is failed"
    except:
        print(traceback.format_exc())
