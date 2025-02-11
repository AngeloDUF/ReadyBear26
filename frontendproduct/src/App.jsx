import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Navbar from "./components/Navbar";

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("auth"); // Verifica si el usuario está autenticado
  return auth ? children : <Navigate to="/login" />; // Si no está autenticado, redirige a login
};

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      {/* Oculta la Navbar en la página de login */}
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/add-product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
