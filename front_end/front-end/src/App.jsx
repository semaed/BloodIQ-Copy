import React from 'react';  // Importing React to create a functional component
import { AppRoutes } from './routers/routes';  // Importing AppRoutes for handling routing in the app
import { LoadingResults } from './Pages/LoadingResults';  // Importing LoadingResults, though it's not used in this component

// Define the App functional component
function App() {
  return (
    <div className="App">  {/* Container div with className 'App' */}
      <AppRoutes />  {/* Rendering the AppRoutes component for routing */}
    </div>
  );
}

export default App;  // Exporting App component for use in the root index.js file
