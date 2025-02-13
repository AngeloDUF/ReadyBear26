const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET;

// Registro de usuarios
router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, role });

        await newUser.save();
        res.json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    console.log("Intentando iniciar sesión con:", username); // Debug

    try {
        const user = await User.findOne({ username });
        
        console.log("Usuario encontrado en la BD:", user); // Debug

        if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, role: user.role });
    } catch (error) {
        console.error("Error en el login:", error);
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
