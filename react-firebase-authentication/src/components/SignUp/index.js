import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <div className='row'>
        <form onSubmit={this.onSubmit} className='col-md-offset-4 col-md-4'>
          <div className='form-group row'>
            <label for='inputName'>Full Name</label>
            <input id='inputName'
              value={username}
              onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
              type='text'
              placeholder='Full Name'
              className='form-control'/>
          </div>
          <div className='form-group row'>
            <label for='inputEmail'>Email</label>
            <input id='inputEmail'
              value={email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type='email'
              placeholder='Email'
              className='form-control'/>
          </div>
          <div className='form-group row'>
            <label for='inputPassword1'>Password</label>
            <input 
                value={passwordOne}
                onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                type="password"
                placeholder="Password"            
                className='form-control' 
                id='inputPassword1'/>
          </div>
          <div className='form-group row'>
            <label for='inputPassword2'>Confirm Password</label>
            <input 
                value={passwordTwo}
                onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                type="password"
                placeholder="Confirm Password"            
                className='form-control' 
                id='inputPassword2'/>
          </div>
          <button disabled={isInvalid} type='submit' className='row btn btn-primary'>Sign Up</button>
          { error && <p>{error.message}</p> }
        </form>
      </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};