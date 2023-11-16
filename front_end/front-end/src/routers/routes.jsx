import { Routes, Route, Navigate } from 'react-router-dom';  // Importing components from react-router-dom for routing
import React, { useEffect } from 'react';  // Importing React and useEffect hook
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for programmatic navigation
import { useAuth } from '../context/AuthContext';  // Importing the useAuth hook from AuthContext
import Home from '../Pages/Home';  // Importing the Home component
import Login from '../Pages/Login';  // Importing the Login component
import CreateAccount from '../Pages/CreateAccount';  // Importing the CreateAccount component
import TestProvider from '../Pages/TestProvider';  // Importing the TestProvider component
import Results from '../Pages/Results';  // Importing the Results component

// Component for protecting routes that require authentication
const PrivateRoute = () => {
  const { user } = useAuth();  // Using the useAuth hook to access the current user
  const navigate = useNavigate();  // Using useNavigate for navigation

  useEffect(() => {
    if (!user) {
      // Redirecting the user to the Login page if not authenticated
      navigate('/Login');
    }
  }, [user, navigate]);  // Adding user and navigate to the dependency array

  if (!user) {
    // Returning a Navigate component to redirect unauthenticated users
    return <Navigate to="/Login" />;
  }

  return <TestProvider />;  // Rendering TestProvider component for authenticated users
};

// Main component for defining application routes
const AppRoutes = () => {
  return (
    <div>
      <Routes>  {/* Defining application routes */}
        <Route path="/" element={<Home />} />  {/* Route for the home page */}
        <Route path="/Login" element={<Login />} />  {/* Route for the login page */}
        <Route path="/CreateAccount" element={<CreateAccount />} />  {/* Route for the create account page */}
        <Route path="/TestProvider" element={<PrivateRoute />} />  {/* Private route for authenticated users */}
        <Route path="/Results" element={<Results />} />  {/* Route for the results page */}
      </Routes>
    </div>
  );
};

export default AppRoutes;  // Exporting AppRoutes for use in the application
