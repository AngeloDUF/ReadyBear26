# Usar la imagen oficial de Go como base
FROM golang:1.21-alpine AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del servicio
COPY . .

# Descargar dependencias y compilar el binario
RUN go mod tidy && go build -o suggestionservice main.go

# Crear un contenedor liviano para ejecutar el binario
FROM alpine:latest
WORKDIR /root/

# Copiar el binario compilado desde el contenedor de construcción
COPY --from=builder /app/suggestionservice .

# Exponer el puerto (ajústalo si es necesario)
EXPOSE 3010

# Ejecutar la aplicación
CMD ["./suggestionservice"]
