import React from "react";
import { Switch, Route } from "react-router";

import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

const PublicLayout = () => {
  return (
    <div>
      <h1>Public</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
};

export default PublicLayout;
