import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const IsAuthenticated = false; //trazer do service de autenticação caso o usuario esteja logado ou não
  return IsAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
