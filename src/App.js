import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import 'App.css';
import 'semantic-ui-less/semantic.less';
import MainLayout from 'layouts/MainLayout';
import AuthLayout from 'layouts/AuthLayout';
import PrivateRoute from 'routes/PrivateRoute';
import Logout from 'pages/auth/Logout';
import { logIn } from 'modules/auth';

const App = (props) => {
  const dispatch = useDispatch();
  let { isAuthenticated } = useSelector(state => ({
    isAuthenticated: state.auth.isAuthenticated
  }));
  const shopId = sessionStorage.getItem('shopId');
  const token = sessionStorage.getItem('token');

  if (shopId && token !== 'error' && !isAuthenticated) { //새로고침 할 때 redux store에 state 변경해 줌
    dispatch(logIn(true));
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => {
            return isAuthenticated ? <Redirect to="/main/dashboard" />
              : <Redirect to="/auth/login" />
          }} />
          <Route exact path="/auth/logout" component={Logout} />
          <Route path="/auth" component={AuthLayout} />
          <PrivateRoute path="/main" component={MainLayout} isAuthenticated={isAuthenticated} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
