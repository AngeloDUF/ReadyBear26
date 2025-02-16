import { useEffect, useState } from "react";
import { getComments, createComment, deleteComment } from "../services/commentsService";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const data = await getComments();
    setComments(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !content) return alert("Usuario y comentario son obligatorios");
    await createComment(user, content);
    setUser("");
    setContent("");
    loadComments();
  };

  const handleDelete = async (id) => {
    await deleteComment(id);
    loadComments();
  };

  return (
    <div>
      <h2>Comentarios</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <textarea
          placeholder="Comentario"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Agregar Comentario</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user}:</strong> {comment.content}
            <button onClick={() => handleDelete(comment.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
