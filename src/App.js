import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'App.css';
import 'semantic-ui-less/semantic.less';
import MainLayout from 'layouts/MainLayout';
import AuthLayout from 'layouts/AuthLayout';
import { useSelector, useDispatch } from 'react-redux';
import PrivateRoute from 'routes/PrivateRoute';

const App = (props) => {
  const { loginResult } = useSelector(state => ({
    loginResult: state.auth.loginResult
  }));

  return (
    <Router basename="/">
      <div>
        <Switch>
          <Route exact path="/" render={() =>
            loginResult ? <Redirect to="/main" />
              : <Redirect to="/auth/login" />} />
          <Route path="/auth" component={AuthLayout} />
          <PrivateRoute path="/main" component={MainLayout} loginResult={loginResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
