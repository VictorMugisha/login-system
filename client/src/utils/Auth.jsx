import { useState, createContext } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loginUser, setLoginUser] = useState(() => {
    const storedUser = localStorage.getItem("loginUser");
    return storedUser ? JSON.parse(storedUser) : null;
  })
  function login(user) {
    setLoginUser(user);
    localStorage.setItem("loginUser", JSON.stringify(user))
  }
  
  function logout() {
    setLoginUser(null);
    localStorage.removeItem("loginUser")
  }

  const loginAuth = !!loginUser;

  return (
    <AuthContext.Provider value={{ loginAuth, login, logout, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
