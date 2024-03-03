import React from "react";
import { Route, Switch } from "react-router-dom";
import { Details } from "../pages/Details";
import Home from "../pages/Home";

function MovieRoute() {
  return (
    <Switch>
      <Route path={"/movie/:id"}>
        <Details />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default MovieRoute;
