# **ReadyBear - Ecommerce**  

## 📌 **Description**  
ReadyBear is an ecommerce platform developed with **React, Node.js, Express, and MySQL**, based on a microservices architecture. It enables product management with authentication and user control.  

## 🏗️ **Project Architecture**  
This project follows a **microservices architecture**:  

- **Frontend** (`frontendproduct/`): React application with Vite for the UI.  
- **Auth Service** (`auth-service/`): Authentication service using JWT.  
- **Product Service** (`productservice/`): Microservice for handling products.  
- **Delete Product Service** (`deleteproduct/`): Microservice for deleting products.  
- **Update Product Service** (`updateproduct/`): Microservice for updating products.  
- **Read Product Service** (`readproduct/`): Microservice for reading products.  

## 🚀 **Technologies Used**  
- **Frontend**: React + Vite, React Router, Axios  
- **Backend**: Node.js, Express.js  
- **Database**: MySQL  
- **Authentication**: JSON Web Tokens (JWT)  
- **Deployment**: AWS EC2  

## 📂 **Project Structure**  
```bash
readybear/
 ├── auth-service/        # Authentication service
 ├── deleteproduct/       # Microservice for deleting products
 ├── frontendproduct/     # Frontend with React + Vite
 │   ├── public/          # Static resources
 │   ├── src/             # Source code
 │   │   ├── components/  # Reusable components
 │   │   ├── pages/       # Main pages
 │   │   ├── styles/      # Global styles
 │   ├── package.json     # Frontend dependencies
 │   ├── vite.config.js   # Vite configuration
 ├── productservice/      # Main product service
 ├── readproduct/         # Microservice for reading products
 ├── updateproduct/       # Microservice for updating products
 ├── .gitignore           # Files ignored by Git
 ├── README.md            # Main documentation
```

## ⚡ **Installation and Configuration**  
### 1️⃣ **Clone the repository**  
```bash
git clone https://github.com/your-username/readybear.git
cd readybear
```
### 2️⃣ **Set up the backend**  
Each microservice has its own `.env` file. Make sure to configure the environment variables.  
```bash
cd productservice  # Or any other microservice
npm install        # Install dependencies
npm start          # Start the service
```
### 3️⃣ **Set up the frontend**  
```bash
cd frontendproduct
npm install
npm run dev  # Start the frontend
```

## 🔐 **Authentication and Security**  
- Users must log in at `/login` before accessing other functionalities.  
- **JWT** is used for user authentication.  
- Route protection is implemented in `App.jsx`.  

## 📌 **Features**  
✅ **JWT authentication**  
✅ **Product CRUD**  
✅ **Microservices architecture**  
✅ **Frontend with React and Vite**  
✅ **Backend with Node.js and MySQL**  
✅ **Route protection**  

## 🚀 **Deployment on AWS**  
The backend is deployed on **AWS EC2**, while the frontend can be hosted on **Vercel or S3**.  

## 📬 **Contact**  
If you have any questions or would like to contribute, contact me at **[adunaucho@uce.edu.ec or cabohorquez@uce.edu.ec]**.  
Thanks for your interest in ReadyBear! 🚀  


