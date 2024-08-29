import { useState, createContext } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
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

AuthProvider.propTypes = {
  children: PropTypes.node,
};
