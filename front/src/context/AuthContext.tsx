import React, { createContext, ReactChild, ReactChildren } from "react";

import useAuth from "./hooks/useAuth";

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

type ContextAuthProps = {
  authenticated: boolean;
  handleLogin: Function;
  handleLogout: Function;
  loading: boolean;
};

const Context = createContext({} as ContextAuthProps);

function AuthProvider({ children }: AuxProps) {
  const { authenticated, handleLogin, handleLogout, loading } = useAuth();

  return (
    <Context.Provider
      value={{ authenticated, handleLogin, loading, handleLogout }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
