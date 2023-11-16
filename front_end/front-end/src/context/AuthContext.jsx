import { createContext, useContext, useState, useEffect } from 'react';  // Importing necessary hooks from React
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';  // Importing authentication functions from Firebase

const AuthContext = createContext();  // Creating a new React context for authentication

// Creating the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // State to keep track of the authenticated user
  const auth = getAuth();  // Getting the Firebase authentication instance

  // Effect to monitor authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);  // Setting the user if logged in
      } else {
        setUser(null);  // Setting to null if logged out
      }
    });

    return () => unsubscribe();  // Cleanup function to unsubscribe from the listener
  }, []);

  // Function to handle user login
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);  // Setting the user upon successful login
    } catch (error) {
      console.error('Error logging in:', error);  // Logging any login error
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      await signOut(auth);  // Signing out the user
      setUser(null);  // Setting the user to null upon logout
    } catch (error) {
      console.error('Error logging out:', error);  // Logging any logout error
    }
  };

  // Returning the provider component
  return (
    <AuthContext.Provider value={{ user, login, logout }}>  {/* Providing the context value */}
      {children}  {/* Rendering children components */}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);  // Using the context and returning its value
};
