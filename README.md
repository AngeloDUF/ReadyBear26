# ReadyBear - Ecommerce

## 📌 Descripción
ReadyBear es una plataforma de ecommerce desarrollada con **React, Node.js, Express y MySQL** basada en una arquitectura de microservicios. Permite la gestión de productos con autenticación y control de usuarios.

## 🏗️ Arquitectura del Proyecto
Este proyecto sigue una arquitectura de microservicios:

- **Frontend** (`frontendproduct/`): Aplicación en React con Vite para la UI.
- **Auth Service** (`auth-service/`): Servicio de autenticación con JWT.
- **Product Service** (`productservice/`): Microservicio para manejar productos.
- **Delete Product Service** (`deleteproduct/`): Microservicio para eliminar productos.
- **Update Product Service** (`updateproduct/`): Microservicio para actualizar productos.
- **Read Product Service** (`readproduct/`): Microservicio para leer productos.

## 🚀 Tecnologías Utilizadas
- **Frontend**: React + Vite, React Router, Axios
- **Backend**: Node.js, Express.js
- **Base de Datos**: MySQL
- **Autenticación**: JSON Web Tokens (JWT)
- **Despliegue**: AWS EC2

## 📂 Estructura del Proyecto
```bash
readybear/
 ├── auth-service/        # Servicio de autenticación
 ├── deleteproduct/       # Microservicio para eliminar productos
 ├── frontendproduct/     # Frontend en React + Vite
 │   ├── public/          # Recursos estáticos
 │   ├── src/             # Código fuente
 │   │   ├── components/  # Componentes reutilizables
 │   │   ├── pages/       # Páginas principales
 │   │   ├── styles/      # Estilos globales
 │   ├── package.json     # Dependencias del frontend
 │   ├── vite.config.js   # Configuración de Vite
 ├── productservice/      # Servicio principal de productos
 ├── readproduct/         # Servicio para leer productos
 ├── updateproduct/       # Servicio para actualizar productos
 ├── .gitignore           # Archivos ignorados en Git
 ├── README.md            # Documentación principal
```

## ⚡ Instalación y Configuración
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/readybear.git
cd readybear
```
### 2️⃣ Configurar el backend
Cada microservicio tiene su propio archivo `.env`. Asegúrate de configurar las variables de entorno.
```bash
cd productservice  # O cualquier otro microservicio
npm install        # Instalar dependencias
npm start         # Iniciar servicio
```
### 3️⃣ Configurar el frontend
```bash
cd frontendproduct
npm install
npm run dev  # Iniciar frontend
```

## 🔐 Autenticación y Seguridad
- Los usuarios deben iniciar sesión en `/login` antes de acceder a otras funcionalidades.
- Se usa **JWT** para la autenticación de usuarios.
- Se implementa protección de rutas en `App.jsx`.

## 📌 Funcionalidades
✅ **Autenticación con JWT**
✅ **CRUD de productos**
✅ **Arquitectura de microservicios**
✅ **Frontend con React y Vite**
✅ **Backend con Node.js y MySQL**
✅ **Protección de rutas**

## 🚀 Despliegue en AWS
El backend está desplegado en **AWS EC2**, mientras que el frontend se puede alojar en Vercel o S3.

## 📬 Contacto
Si tienes dudas o quieres contribuir, contáctame en **[tu email o GitHub]**. ¡Gracias por tu interés en ReadyBear! 🚀

