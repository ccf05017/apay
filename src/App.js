import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import 'semantic-ui-less/semantic.less';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

const App = (props) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router basename="/">
        <div>
          <Switch>
          <Route exact path="/" render={() =>
            isAuthenticated ? <Redirect to="/main" />
              : <Redirect to="/auth/login" />} />
          <Route path="/auth" component={AuthLayout} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
