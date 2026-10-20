# MLflow with PostgreSQL using Docker Compose

## Objective
Deploy MLflow tracking with PostgreSQL as its backend database using Docker Compose.

## Components
- MLflow: experiment tracking server
- PostgreSQL 16: persistent metadata storage
- Docker Compose: manages the multi-container application
- Custom Dockerfile: installs the PostgreSQL Python driver required by MLflow

## Run
From the repository root, create a local `.env` file with the required PostgreSQL variables, then run:

docker compose --env-file .env -f 05-docker-mlflow/docker-compose.yml up -d --build

## Access
MLflow UI: http://localhost:5001

## Verify
docker compose --env-file .env -f 05-docker-mlflow/docker-compose.yml ps

## Cleanup
docker compose --env-file .env -f 05-docker-mlflow/docker-compose.yml down

The PostgreSQL data volume is preserved by the cleanup command above.

## Security
The `.env` file contains local credentials and must not be committed to GitHub.
