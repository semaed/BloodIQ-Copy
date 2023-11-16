import styled from "styled-components";  // Importing styled-components for custom styled components
import "../index.css"  // Importing the main CSS file for global styles
import Logo from "../components/Logo_2";  // Importing the Logo component
import ClockLoader from "react-spinners/ClockLoader";  // Importing ClockLoader spinner from react-spinners

// Define the LoadingResults functional component
export function LoadingResults() {
    return (
        <Container> {/* Using the Container styled component for layout */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Logo/> {/* Rendering the Logo component */}
            </div>
            <h1 
                style={{ 
                    color: '#fff', 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '2rem', 
                    top: '200px', 
                    marginTop: '2rem'
                }}
            >
                Loading Results
            </h1> {/* Heading with custom styles */}
            <ClockLoader color={"#FF3131"} size={150} /> {/* ClockLoader spinner component */}
            <h3 
                style={{ 
                    color: '#fff', 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '16px', 
                    marginTop: '2rem'
                }}
            >
                Exploring your blood digitally... <br />
                the information is on its way.
            </h3> {/* Subheading with custom styles */}
        </Container>
    );
}

// Styled-component for Container
const Container = styled.div`
    margin-top: 0;
    position: absolute;
    height: 100vh;  // 100% of the viewport height
    width: 100%;  // 100% width of the parent element
    background-color: #2E9DDD;  // Background color
    display: flex;  // Using flexbox for layout
    flex-direction: column;  // Children elements in column direction
    justify-content: center;  // Centering content vertically
    align-items: center;  // Centering content horizontally
    text-color: white;  // White text color
    font-family: 'Inter', sans-serif;  // Font family
    padding: 5px 0;  // Padding
`;

export default LoadingResults;  // Export the LoadingResults component for use in other parts of the application
