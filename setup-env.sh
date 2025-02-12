#!/bin/bash

echo "��� Creando archivos .env para cada microservicio..."

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

env_files["frontendproduct"]="VITE_API_URL=http://localhost:3001
VITE_AUTH_URL=http://localhost:3001"

# Crear los archivos .env en cada microservicio
for service in "${!env_files[@]}"; do
    echo "��� Creando $service/.env ..."
    echo -e "${env_files[$service]}" > "$service/.env"
done

echo "✅ Todos los archivos .env han sido creados."
