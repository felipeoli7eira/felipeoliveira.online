#!/bin/bash

APP_CONTAINER_NAME='felipeoliveira.online'

docker compose up -d

docker exec -it $APP_CONTAINER_NAME npx tailwindcss -i ./src/tailwind.css -o ./src/tailwindcss.css --watch
