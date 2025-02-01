from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI &  GitHub - Finale!!"}

@app.get("/ping")
def ping():
    return {"status": "OK from Github - Finale!"}
