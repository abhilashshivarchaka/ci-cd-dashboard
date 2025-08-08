from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from any origin (frontend runs on localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use ["http://localhost:3000"] for stricter CORS
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health():
    return {"status": "running"}

@app.get("/builds")
def get_builds():
    return {
        "builds": [
            {"id": 1, "status": "Success", "duration": "2 min"},
            {"id": 2, "status": "Failed", "duration": "1.5 min"}
        ]
    }

