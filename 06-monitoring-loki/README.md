# Log Monitoring with Grafana, Loki and Alloy

## Objective
Build a local log-monitoring stack using Docker Compose.

## Architecture
- Grafana: visualizes and queries logs.
- Loki: stores and queries log streams.
- Grafana Alloy: collects sample log entries and forwards them to Loki.
- Docker Compose: runs the three services together.

## Ports
- Grafana: http://localhost:3001
- Loki: http://localhost:3100
- Alloy UI: http://localhost:12345

## Start the stack
docker compose -f 06-monitoring-loki/docker-compose.yml up -d

## Check service status
docker compose -f 06-monitoring-loki/docker-compose.yml ps

## Check Loki readiness
curl http://localhost:3100/ready

## Explore logs
Open Grafana, go to Explore, select Loki and run:

{job="sample-app"}

## Stop the stack
docker compose -f 06-monitoring-loki/docker-compose.yml down

The named data volumes are preserved when using this command.

## Result
Verified that Grafana is healthy, Loki is ready, Alloy tails the sample log file, and the sample logs are visible in Grafana Explore.

## Scope
This is a local learning setup using sample logs, not a production monitoring deployment.
