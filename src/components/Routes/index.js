import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../home";
import Usuario from "../Usuario";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/usuario">
        <Usuario />
      </Route>
    </Switch>
  );
};

export default Routes;
