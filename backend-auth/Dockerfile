# 1️⃣ Usar una imagen oficial de Node.js (versión estable)
FROM node:18-alpine

# 2️⃣ Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# 3️⃣ Copiar los archivos de `package.json` y `package-lock.json`
COPY package*.json ./

# 4️⃣ Instalar dependencias
RUN npm install

# 5️⃣ Copiar el resto del código de la aplicación
COPY . .

# 6️⃣ Exponer el puerto del backend
EXPOSE 5000

# 7️⃣ Comando para iniciar el servidor
CMD ["npm", "start"]
