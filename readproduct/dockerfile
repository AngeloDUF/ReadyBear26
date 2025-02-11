FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --only=production

# Copiar el resto del código
COPY . .

# Exponer el puerto (ajusta si es diferente)
EXPOSE 3003

# Comando para ejecutar el servicio
CMD ["node", "src/index.js"]
