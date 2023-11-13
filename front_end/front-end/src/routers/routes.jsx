import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import CreateAccount from '../Pages/CreateAccount';
import TestProvider from '../Pages/TestProvider';
import Results from '../Pages/Results';

const PrivateRoute = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirige al usuario a la página de inicio de sesión si no está autenticado
      navigate('/Login');
    }
  }, [user, navigate]);

  if (!user) {
    // Evita renderizar el componente si no está autenticado
    return <Navigate to="/Login" />;
  }

  return <TestProvider />;
};

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/TestProvider" element={<PrivateRoute />} />
        <Route path="/Results" element={<Results />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
