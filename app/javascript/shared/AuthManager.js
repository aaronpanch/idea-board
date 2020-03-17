import React, { useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

import LoginModal from "./LoginModal";

export const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

const AuthManager = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggingIn, setLoggingIn] = useState(false);
  const toggleLogin = useCallback(() => setLoggingIn(open => !open));
  const logout = useCallback(() => setUser(null), []);

  const onSubmit = useCallback(user => {
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