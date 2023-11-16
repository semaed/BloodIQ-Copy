import React from 'react';  // Importing React to enable JSX and functional components
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom for navigation
import Logo from '../components/Logo_3';  // Importing the Logo component

// Define the Home functional component
const Home = () => {
  return (
    // React Fragment to return multiple elements
    <>
      {/* Main container div */}
      <div id="rectangle">
        <Logo />  {/* Rendering the Logo component */}
        <h2 
          style={{ 
            fontSize: '48px', 
            position: 'absolute', 
            color: '#fff', 
            top: '241px', 
            left: '86px'
          }}
        >
          Your Hematological <br /> Health Advisor!
        </h2> {/* Heading with custom styles */}
        <p 
          style={{ 
            fontSize: '24px', 
            color: '#fff', 
            position: 'absolute', 
            left: '86px', 
            top: '420px' 
          }}
        >
          Interpret your blood tests intelligently and receive personalized health recommendations.
        </p> {/* Paragraph with custom styles */}
        <Link to="/Login"> {/* Link component to navigate to the Login page */}
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
              e.target.style.backgroundColor = '#F05D5D';  // Change button background color on mouse over
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#FF3131';  // Revert button background color on mouse out
            }}
          >
            Get Started Now
          </button> {/* Button with dynamic style and navigation functionality */}
        </Link>
      </div>
      {/* Additional content for your home page can be added here */}
    </>
  );
};

export default Home;  // Export the Home component for use in other parts of the application
