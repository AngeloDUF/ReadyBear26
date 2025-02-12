#!/bin/bash

echo "í³„ Creando archivos .env para cada microservicio..."

# Definir las variables para cada servicio
declare -A env_files

env_files["auth-service"]="PORT=3001
MONGO_URI=mongodb://mongo-db:27017/authdb
JWT_SECRET=supersecretkey"

env_files["deleteproduct"]="PORT=3002
MONGO_URI=mongodb://mongo-db:27017/productdb"

env_files["productservice"]="PORT=3003
MONGO_URI=mongodb://mongo-db:27017/productdb"

env_files["readproduct"]="PORT=3004
MONGO_URI=mongodb://mongo-db:27017/productdb"

env_files["updateproduct"]="PORT=3005
MONGO_URI=mongodb://mongo-db:27017/productdb"

# Crear los archivos .env en cada microservicio
for service in "${!env_files[@]}"; do
    echo "í³ Creando $service/.env ..."
    echo -e "${env_files[$service]}" > "$service/.env"
done

echo "âœ… Todos los archivos .env han sido creados."
