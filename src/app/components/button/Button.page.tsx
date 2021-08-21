import React from 'react';
import { Body } from './Button.style';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = () => {
  return (
    <Body>
      <h1>Button</h1>
    </Body>
  );
};

export default Button;
