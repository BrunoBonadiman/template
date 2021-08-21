import React from 'react';
import { Body } from './Home.style';
import { HomeProps } from './Home.types';

const Home: React.FC<HomeProps> = () => {
  return (
    <Body>
      <h1>Home</h1>
    </Body>
  );
};

export default Home;
