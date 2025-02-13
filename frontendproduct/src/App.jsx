import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct"; 
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
 // ✅ Asegurar que se importa correctamente

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
        <Route path="/update-product/:id" element={<ProtectedRoute><UpdateProduct /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
