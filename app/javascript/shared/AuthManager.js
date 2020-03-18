import React, { useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import decode from "jwt-decode";

import LoginModal from "./LoginModal";

const TOKEN_KEY = "ideas-token";

const loadSession = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token && decode(token);
};

export const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

const AuthManager = ({ children }) => {
  const [user, setUser] = useState(loadSession());
  const [isLoggingIn, setLoggingIn] = useState(false);
  const toggleLogin = useCallback(() => setLoggingIn(open => !open));
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
  }, []);

  const onSubmit = useCallback(async formData => {
    const res = await fetch("/api/tokens", {
      method: "post",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(formData)
    });

    const { token, user } = await res.json();
    localStorage.setItem(TOKEN_KEY, token);

    setUser(user);
    setLoggingIn(false);
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login: setUser,
        logout,
        toggleLogin
      }}
    >
      {children}
      <LoginModal
        isOpen={!user && isLoggingIn}
        toggle={toggleLogin}
        onSubmit={onSubmit}
      />
    </AuthContext.Provider>
  );
};

AuthManager.propTypes = {
  children: PropTypes.node
};

export default AuthManager;
