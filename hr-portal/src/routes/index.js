import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Login from "./../components/Login";
import Signup from "./../components/Signup";
import Home from "./../components/Home";
import Employee from "./../components/Employee";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route exact path="/employeeRegister" render={props => <Employee {...props} />} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
