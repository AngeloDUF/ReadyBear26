#!/bin/bash

echo "🚀 Iniciando configuración de ReadyBear..."

# Lista de microservicios basada en la estructura de ReadyBear26-qa
SERVICES=(
    "auditservice"
    "auth-service"
    "backend-auth"
    "commentservice"
    "deleteproduct"
    "documentservice"
    "frontendproduct"
    "productservice"
    "readproduct"
    "suggestionservice"
    "updateproduct"
)

# Instalar dependencias en cada microservicio
for SERVICE in "${SERVICES[@]}"; do
    if [ -d "$SERVICE" ]; then
        echo "📦 Instalando dependencias en $SERVICE..."
        cd $SERVICE
        npm install
        cd ..
    else
        echo "⚠️ Advertencia: No se encontró el directorio $SERVICE, saltando..."
    fi
done

echo "✅ Instalación completada. Puedes iniciar los servicios manualmente."
echo "Para ejecutar un servicio, usa: cd <servicio> && npm start"

