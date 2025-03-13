import psycopg2
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Fetch variables
USER = os.getenv("USER")
PASSWORD = os.getenv("PASSWORD")
HOST = os.getenv("HOST")
PORT = os.getenv("PORT")
DBNAME = os.getenv("DBNAME")
DATABASE_URL = os.getenv("NEON_URL")

# Connect to the database
try:
    conn = psycopg2.connect(DATABASE_URL)
    print("Connection successful!")
    
    # Create a cursor to execute SQL queries
    cursor = conn.cursor()
    
    # Example query
    cursor.execute("""
        SELECT * FROM users;
    """)

    # Fetch all results
    users = cursor.fetchall()

    # # Convert to a list of dictionaries

    users_list = [user for user in users]

    print(users_list)
    
    # connection.commit()
    cursor.close()
    # connection.close()

    conn.close()

except Exception as e:
    print(f"Failed to connect: {e}")