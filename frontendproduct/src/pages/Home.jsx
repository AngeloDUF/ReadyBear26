import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(https://branition.com/assets/img/users/logos/6218-8cIbWdE.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'Red',
        padding: 3,
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(8, 9, 58, 0.74)' }}>
          Welcome to ReadyBear
        </Typography>
        <Typography variant="h6" sx={{ textShadow: '1px 1px 3px hsla(239, 71.70%, 19.40%, 0.50)' }}>
          Just a click away. ReadyBear brings it to you
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/products"
          sx={{ marginTop: 3, fontSize: '1.2rem' }}
        >
          View Products
        </Button>
      </Container>
    </Box>
  );
};

export default Home;