import React from 'react';
import { Body } from './Welcome.style';
import { WelcomeProps } from './Welcome.types';

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <Body>
      <h1>Welcome</h1>
    </Body>
  );
};

export default Welcome;
