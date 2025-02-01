from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI &  GitHub Pt 3!!"}

@app.get("/ping")
def ping():
    return {"status": "OK from Github pt 3!"}
