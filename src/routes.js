import { Redirect, Route, Switch } from "react-router-dom";

import About from "./views/About.js";
import CV from "./views/CV.js";
import {Home} from "./views/Home.js";
import Notes from "./views/Notes.js";
import React from "react";
import Study from "./views/Study.js";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home">
          <Redirect to="/" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/study" component={Study} />
      </Switch>
    </>
  );
};
