import { useState, createContext, useContext } from "react";
import PropTypes from 'prop-types'

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [loginToken, setLoginToken] = useState(null);
  function login(token) {
    setLoginToken(token);
  }

  function logout() {
    setLoginToken(null);
  }

  const loginAuth = !!loginToken;

  return (
    <AuthContext.Provider value={{ loginAuth, login, logout, loginToken }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

// Custom hook to access the context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return context;
}
