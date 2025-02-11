#!/bin/bash

echo "🚀 Iniciando configuración de ReadyBear..."

# Lista de microservicios
SERVICES=("auth-service" "deleteproduct" "productservice" "readproduct" "updateproduct")

# Instalar dependencias en cada microservicio
for SERVICE in "${SERVICES[@]}"; do
    echo "📦 Instalando dependencias en $SERVICE..."
    cd $SERVICE
    npm install
    cd ..
done

# Instalar dependencias en el frontend
echo "🎨 Instalando dependencias en frontendproduct..."
cd frontendproduct
npm install
cd ..

echo "✅ Instalación completada. Puedes iniciar los servicios manualmente."
echo "Para ejecutar un servicio, usa: cd <servicio> && npm start"
