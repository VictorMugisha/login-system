import { useState, createContext } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loginToken, setLoginToken] = useState(() => {
    const storedToken = localStorage.getItem("loginToken");
    return storedToken ? JSON.parse(storedToken) : null;
  });
  function login(token) {
    setLoginToken(token);
    localStorage.setItem("loginToken", JSON.stringify(token))
  }
  
  function logout() {
    setLoginToken(null);
    localStorage.removeItem("loginToken")
  }

  const loginAuth = !!loginToken;

  return (
    <AuthContext.Provider value={{ loginAuth, login, logout, loginToken }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
