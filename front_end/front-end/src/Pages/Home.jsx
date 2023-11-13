import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Logo from '../components/Logo_3';

const Home = () => {
  return (
    <>
      <div id="rectangle">
        <Logo />
        <h2 style={{ fontSize: '48px', position: 'absolute', color: '#fff', top: '241px', left: '86px'}}>Your Hematological <br /> Health Advisor!</h2>
        <p style={{ fontSize: '24px', color: '#fff', position: 'absolute', left: '86px', top: '420px' }}>
          Interpret your blood tests intelligently and receive personalized health recommendations.
        </p>
        <Link to="/Login"> {/* Utiliza Link para dirigir al usuario a la página de Login */}
          <button
            style={{
              position: 'absolute',
              left: '225px',
              top: '620px',
              width: '214px',
              height: '49px',
              borderRadius: '25px',
              backgroundColor: '#FF3131',
              color: '#fff',
              fontSize: '24px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#F05D5D';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#FF3131';
            }}
          >
            Get Started Now
          </button>
        </Link>
      </div>
      {/* Resto del contenido de tu página de inicio */}
    </>
  );
};

export default Home;
