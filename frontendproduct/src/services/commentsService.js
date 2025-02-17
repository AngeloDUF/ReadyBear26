const API_URL = import.meta.env.VITE_API_COMMENTS;

export const getComments = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("❌ Error al obtener comentarios:", error);
    return [];
  }
};

export const createComment = async (user, content) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, content }),
    });
    return await response.json();
  } catch (error) {
    console.error("❌ Error al agregar comentario:", error);
  }
};

export const deleteComment = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error("❌ Error al eliminar comentario:", error);
  }
};
