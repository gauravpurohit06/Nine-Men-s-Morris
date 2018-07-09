import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Form,FormGroup,FormControl,Col,Button} from 'react-bootstrap';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <div className='row'>
      <div className='col-md-offset-4 col-md-4'>
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    </div>
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className='row'>
        <form onSubmit={this.onSubmit} className='col-md-offset-4 col-md-4'>
          <div className='form-group row'>
            <label for='inputEmail'>Email address</label>
            <input id='inputEmail'
              type='email' 
              value={email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}   
              className='form-control' 
              placeholder='Enter email'/>
            <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
          </div>
          <div className='form-group row'>
            <label for='inputPassword1'>Password</label>
            <input 
              value={password}
              onChange={event => this.setState(updateByPropertyName('password', event.target.value))}            
              type='password'
              className='form-control' 
              id='inputPassword1' 
              placeholder='Password'/>
          </div>
          <button disabled={isInvalid} type='submit' className='row btn btn-primary'>Submit</button>
          { error && <p>{error.message}</p> }
        </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
