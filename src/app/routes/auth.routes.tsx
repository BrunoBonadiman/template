import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Auth/login';
import Register from '../pages/Auth/register';
import Welcome from '../pages/welcome';

const AuthRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Welcome} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
    </Switch>
  </BrowserRouter>
);

export default AuthRoutes;