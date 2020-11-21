import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input';
import './sign-in.scss';
import CustomButton from '../../components/custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: false,
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '', isLoggedIn: true });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoggedIn && <Redirect to='/' />}
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required></FormInput>

            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required></FormInput>
            <div className='buttons'>
              <CustomButton type='submit'>Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign In With Google
              </CustomButton>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
