import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./views/Home.js";
import React from "react";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};
