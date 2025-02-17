const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET;

// Registro de usuarios
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    console.log("🔍 Intentando iniciar sesión con:", username); // Debug

    try {
        const user = await User.findOne({ username });

        if (!user) {
            console.log("❌ Usuario no encontrado");
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("❌ Contraseña incorrecta");
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        console.log("✅ Inicio de sesión exitoso, enviando token:", token);
        res.json({ token, role: user.role });
    } catch (error) {
        console.error("❌ Error en el login:", error);
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
});


// Ruta protegida
router.get('/protected', async (req, res) => {
    const token = req.headers.authorization;
    if (!token) return res.status(403).json({ message: 'Token requerido' });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: 'Acceso permitido', user: decoded });
    } catch (error) {
        res.status(401).json({ message: 'Token inválido' });
    }
});

module.exports = router;
