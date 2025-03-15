from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from huggingface_hub import hf_hub_download, login
import onnxruntime as ort

import numpy as np
import psycopg2
from dotenv import load_dotenv
from pydantic import BaseModel
import os

# Load environment variables from .env
load_dotenv()

DATABASE_URL = os.getenv("NEON_URL")

hf_token = os.getenv("HF_TOKEN")

login(token=hf_token)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change this in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

class SKModel(BaseModel):
    data: list

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI &  GitHub - Finale!!"}

@app.get("/ping")
def ping():
    return {"status": "Update - Final Full Stack Deployment 4"}

@app.get("/users")
def get_users():

    try:
        conn = psycopg2.connect(DATABASE_URL)

        # Create a cursor to execute SQL queries
        cursor = conn.cursor()

        cursor.execute("""
            SELECT * FROM users;
        """)

        users = cursor.fetchall()

        users_list = [user for user in users]

        cursor.close()

        conn.close()
        return {"users": users_list}

    except Exception as e:
        return {"error": f"Failed to connect: {e}"}

@app.post("/predict")
def predict(data: SKModel):
    model_path = hf_hub_download(repo_id="suneeln-duke/test-onnx", filename="test_lr.onnx")

    # Step 2: Load the ONNX model
    session = ort.InferenceSession(model_path)

    # Step 3: Prepare input data (modify based on your model)
    input_data = np.array([data.data], dtype=np.float32)  # Example input

    # Step 4: Get input and output names dynamically
    input_name = session.get_inputs()[0].name
    output_name = session.get_outputs()[0].name

    # Step 5: Run inference
    predictions = session.run([output_name], {input_name: input_data})

    predicted_class = int(predictions[0][0])

    print("Predictions:", predicted_class)

    return {"predicted_class": predicted_class}