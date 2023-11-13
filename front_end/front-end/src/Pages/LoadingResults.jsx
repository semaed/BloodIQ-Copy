import styled from "styled-components";
import "../index.css"
import Logo from "../components/Logo_2";
import ClockLoader from "react-spinners/ClockLoader";

export function LoadingResults() {
    return ( <Container>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
            <Logo/>
        </div>
        <h1 style={{color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '2rem', top: '200px', marginTop: '2rem'}}>Loading Results</h1>
        <ClockLoader color={"#FF3131"} size={150} />
        <h3 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '16px', marginTop: '2rem'}}>Exploring your blood digitally... <br />
         the information is on its way.</h3>
    </Container>);
}

const Container =styled.div`
margintop: 0;
position: absolute;
height: 100vh;
width: 100%;
background-color: #2E9DDD;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
textcolor: white;
font-family: 'Inter', sans-serif;
padding: 5px 0;
`;
export default LoadingResults;
