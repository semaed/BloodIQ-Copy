import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './style.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente.

    try {
      const auth = getAuth();

      // Inicia sesión utilizando Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // Usuario autenticado con éxito, puedes redirigirlo a la página deseada
      navigate('/TestProvider');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">Login</div>
      <form onSubmit={handleLogin}> {/* Agregar el formulario */}
        <input
          type="text"
          placeholder="Email"
          className="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="form-button"> {/* Agregar el botón de tipo 'submit' */}
          Login
        </button>
      </form>
      <div className="signup-link">
        You don't have an account?{' '}
        <span onClick={() => navigate('/CreateAccount')} className="signup-link-text">
          SignUp
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
