import React from 'react';
import { Body } from './Profile.style';
import { ProfileProps } from './Profile.types';

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Body>
      <h1>Profile</h1>
    </Body>
  );
};

export default Profile;
