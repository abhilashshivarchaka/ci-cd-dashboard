from fastapi import FastAPI

app = FastAPI()

@app.get("/builds")
def get_builds():
    return {
        "builds": [
            {"id": 1, "status": "Success", "duration": "2 min"},
            {"id": 2, "status": "Failed", "duration": "1.5 min"}
        ]
    }
