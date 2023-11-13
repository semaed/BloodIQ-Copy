import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './style.css';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const auth = getAuth();

      // Crea un objeto con los datos del usuario
      const userData = {
        email: email,
        password: password,
        displayName: firstName + ' ' + lastName,
      };

      // Registra al usuario utilizando Firebase
      await createUserWithEmailAndPassword(auth, userData.email, userData.password);

      // Ahora el usuario está registrado y puede iniciar sesión

      // También puedes iniciar sesión automáticamente al usuario aquí si lo deseas

      navigate('/TestProvider'); // Redirige al usuario a la página de TestProvider
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">Create Account</div>

      <input
        type="text"
        placeholder="First Name"
        className="form-input_1"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}

        
      />
      <input
        type="text"
        placeholder="Last Name"
        className="form-input_2"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        className="form-input_3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-input_4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="form-button" onClick={handleRegistration}>
        Register Now
      </button>
    </div>
  );
};

export default RegistrationForm;
