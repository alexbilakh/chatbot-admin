import React, { createContext, useEffect, useState, useCallback } from 'react';

export interface AuthContextI {
  isLoggedIn: boolean;
  setIsLoggedIn: Function;
}

const defaultState = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export const AuthContext = createContext<AuthContextI>(defaultState);

const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
