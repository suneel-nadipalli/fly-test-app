from huggingface_hub import hf_hub_download, login
import onnxruntime as ort
import numpy as np

from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

hf_token = os.getenv("HF_TOKEN")

login(token=hf_token)

# Step 1: Download the ONNX model from Hugging Face
model_path = hf_hub_download(repo_id="suneeln-duke/test-onnx", filename="test_lr.onnx")

# Step 2: Load the ONNX model
session = ort.InferenceSession(model_path)

# Step 3: Prepare input data (modify based on your model)
input_data = np.array([[5.1, 3.5, 1.4, 0.2]], dtype=np.float32)  # Example input

# Step 4: Get input and output names dynamically
input_name = session.get_inputs()[0].name
output_name = session.get_outputs()[0].name

# Step 5: Run inference
predictions = session.run([output_name], {input_name: input_data})

# Step 6: Print predictions
print("Predictions:", predictions)
