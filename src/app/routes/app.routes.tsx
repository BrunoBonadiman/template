import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../pages/dashboard/home';
import Profile from '../pages/dashboard/profile';


const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/profile' component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;