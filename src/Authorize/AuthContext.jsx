import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { reducer } from './Reducer';
import { v4 as uuidv4 } from 'uuid';

// Step 2: Create the initial state
const initialState = {
  isLoggedIn: false,
  user: null,

};

// Step 3: Create the context
const AuthContext = createContext();

// Step 4: Create the AuthContextProvider
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const userState = localStorage.getItem("user");
    // Check if userState is not null and is a valid JSON string
    if (userState !== null && typeof userState === "string") {
      try {
        return JSON.parse(userState);
      } catch (error) {
        console.log(userState)
        console.error("Error parsing user state from localStorage:", error);
      }
    }
    return initialState;
  });

  // If the "id" is not present in the stored state, generate a new "id"
  // if (state !== null && !state.id) {
  //   state.id = uuidv4();
  // }
  async function getData() {
    const response = await fetch('https://www.balldontlie.io/api/v1/players/254')
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    // getData()
    localStorage.setItem("user", JSON.stringify(state));

  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider.');
  }
  return context;
}

export default AuthContextProvider;
