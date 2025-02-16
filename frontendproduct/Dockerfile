# Etapa de construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa de producción: Servir con Nginx
FROM nginx:alpine

# Copiar los archivos estáticos generados en la etapa de construcción
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto en el que corre Nginx
EXPOSE 80

# Comando por defecto para correr Nginx
CMD ["nginx", "-g", "daemon off;"]
