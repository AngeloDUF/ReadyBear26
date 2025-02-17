#!/bin/bash

# Lista de servicios
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

# Recorrer cada servicio e instalar dependencias según el lenguaje
for service in "${SERVICES[@]}"; do
    echo "📦 Instalando dependencias en $service..."
    cd $service || continue
    
    # Node.js (package.json)
    if [ -f "package.json" ]; then
        npm install
    fi
    
    # Python (requirements.txt)
    if [ -f "requirements.txt" ]; then
        pip install -r requirements.txt
    fi
    
    # Go (go.mod)
    if [ -f "go.mod" ]; then
        go mod tidy
    fi
    
    # .NET (C# .csproj)
    if ls *.csproj 1> /dev/null 2>&1; then
        dotnet restore
    fi
    
    cd ..
done

echo "✅ Instalación completada. Puedes iniciar los servicios manualmente."
echo "Para ejecutar un servicio, usa: cd <servicio> && npm start"
