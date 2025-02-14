#!/bin/bash

echo "🚀 Creando archivos .env para cada microservicio..."

# Definir las variables de entorno para cada servicio
declare -A env_files

env_files["auditservice"]="PORT=3000
MONGO_URI=mongodb://mongo-db:27017/auditdb"

env_files["auth-service"]="PORT=3001
MONGO_URI=mongodb://mongo-db:27017/authdb
JWT_SECRET=supersecretkey"

env_files["backend-auth"]="PORT=3002
MONGO_URI=mongodb://mongo-db:27017/authdb
JWT_SECRET=supersecretkey"

env_files["commentservice"]="PORT=3003
MONGO_URI=mongodb://mongo-db:27017/commentdb"

env_files["deleteproduct"]="PORT=3004
MONGO_URI=mongodb://mongo-db:27017/productdb"

env_files["documentservice"]="PORT=3005
MONGO_URI=mongodb://mongo-db:27017/documentdb"

env_files["frontendproduct"]="VITE_API_URL=http://backend-auth:3002
VITE_AUTH_URL=http://backend-auth:3002"

env_files["productservice"]="PORT=3006
MONGO_URI=mongodb://mongo-db:27017/productdb"

env_files["readproduct"]="PORT=3007
MONGO_URI=mongodb://mongo-db:27017/productdb"

env_files["suggestionservice"]="PORT=3008
MONGO_URI=mongodb://mongo-db:27017/suggestiondb"

env_files["updateproduct"]="PORT=3009
MONGO_URI=mongodb://mongo-db:27017/productdb"

# Crear los archivos .env en cada microservicio
for service in "${!env_files[@]}"; do
    if [ ! -f "$service/.env" ]; then
        echo "📄 Creando $service/.env ..."
        echo -e "${env_files[$service]}" > "$service/.env"
    else
        echo "⚠️ $service/.env ya existe, no se sobrescribirá."
    fi
done

echo "✅ Todos los archivos .env han sido creados correctamente."

#hi