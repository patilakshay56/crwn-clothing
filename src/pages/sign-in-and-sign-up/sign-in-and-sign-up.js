import React from 'react';
import './sign-in-and-sign-up.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const signInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default signInAndSignUp;
