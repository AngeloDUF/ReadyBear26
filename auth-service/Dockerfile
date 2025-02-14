FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install --only=production

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto en el que corre el servicio
EXPOSE 3001

# Comando para ejecutar el servicio
CMD ["node", "server.js"]

