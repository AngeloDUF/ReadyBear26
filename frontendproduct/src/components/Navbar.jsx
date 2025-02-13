import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("auth"));
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("auth"));
    };

    window.addEventListener("storage", checkAuth);
    window.addEventListener("authChanged", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChanged", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            My Shop
          </Link>
        </Typography>
        <Box>
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Button>
          {isAuthenticated ? (
            <>
              <Button color="inherit">
                <Link to="/products" style={{ textDecoration: "none", color: "white" }}>
                  Productos
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/add-product" style={{ textDecoration: "none", color: "white" }}>
                  Add Product
                </Link>
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </>
          ) : (
            <Button color="inherit">
              <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                Login
              </Link>
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
