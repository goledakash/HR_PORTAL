import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Login from "./../components/Login";
import Signup from "./../components/Signup";
import Home from "./../components/Home";
import Employee from "./../components/Employee";
import Main from "./../components/Main";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route exact path="/employeeRegister" render={props => <Employee {...props} />} />
        <Route exact path="/main" render={props => <Main {...props} />} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
