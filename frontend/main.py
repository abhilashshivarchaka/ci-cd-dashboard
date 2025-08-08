from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/builds")
def get_builds():
    return {
        "builds": [
            {"id": 1, "status": "Success", "duration": "2 min"},
            {"id": 2, "status": "Failed", "duration": "1.5 min"},
        ]
    }
