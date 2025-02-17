const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// Obtener todos los comentarios
router.get("/", async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
});

// Crear un comentario
router.post("/", async (req, res) => {
  const { user, content } = req.body;
  const newComment = await Comment.create({ user, content });
  res.json(newComment);
});

// Eliminar un comentario
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Comment.destroy({ where: { id } });
  res.json({ message: "Comentario eliminado" });
});

module.exports = router;
