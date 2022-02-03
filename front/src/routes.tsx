import React from "react";
import { Switch, Route, Redirect, RouteProps } from "react-router-dom";

import Home from "./pages/Home";
import Denuncia from "./pages/Denuncia";
import Login from "./pages/LoginPrefeitura";
import HomePrefeitura from "./pages/HomePrefeitura";
import VizualizarDenuncia from "./pages/VizualizarDenuncia";

import { useContext } from "react";
import { Context } from "./context/AuthContext";

type CustomRouteProps = RouteProps & {
  isPrivate?: boolean;
};

function CustomRoute({ isPrivate, ...rest }: CustomRouteProps) {
  const { authenticated, loading } = useContext(Context);

  if (loading) {
    return <></>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/LoginPrefeitura" />;
  }

  return <Route {...rest} />;
}

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Denuncia" exact component={Denuncia} />
      <Route path="/LoginPrefeitura" exact component={Login} />
      <CustomRoute
        path="/VisualizarDenuncia/:token"
        exact
        component={VizualizarDenuncia}
      />

      <CustomRoute
        isPrivate
        path="/HomePrefeitura"
        exact
        component={HomePrefeitura}
      />
    </Switch>
  );
}
export default AppRouter;
