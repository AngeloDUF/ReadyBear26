import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { Sequelize } from "sequelize";

// Cargar variables de entorno
dotenv.config();

// Configurar Express
const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

// Configurar conexión a MySQL con Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

// Verificar conexión a MySQL
try {
  await sequelize.authenticate();
  console.log("✅ Conectado a MySQL correctamente.");
} catch (error) {
  console.error("❌ Error de conexión a MySQL:", error);
}

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("✅ Comments Service funcionando.");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
