import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../home";
import Usuario from "../Usuario";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Usuario} path="/usuario" />
    </BrowserRouter>
  );
};

export default Routes;
