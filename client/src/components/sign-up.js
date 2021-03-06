/////////////////////////////////////////////////////////////////////////////////////
///////////////                  Imports                   /////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//Importing React
import React from 'react';

//Importing our connect wrap
import {connect} from 'react-redux';

//Importing actions from the actions file
import {changeNavButton, submitSignUp} from '../actions';

//Importing the sign up css file
import './sign-up.css';

/////////////////////////////////////////////////////////////////////////////////////
///////////////                  Sign Up                   /////////////////////////
///////////////////////////////////////////////////////////////////////////////////
export class SignUp extends React.Component{
  //before rendering, change navButton text to Login in the nav bar
  componentWillMount(){
    this.props.dispatch(changeNavButton('Login'));
  }

  //changes the page to login page after signing up
  changePage(event){
    const firstName = this.firstname.value;
    const lastName = this.lastname.value;
    const userName = this.username.value;
    const password = this.password.value;
    const code = this.code.value;

    if(firstName.length >= 1 && lastName.length >= 1 && userName.length >= 1 && password.length >= 6 && code.length >= 1){
      this.props.dispatch(submitSignUp(userName, password, firstName, lastName, code));
    }
  }

  //renders the sign up form
  render(){
    return (
      <div className="sign-up-container">
         <form className="sign-up-form">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" placeholder="Enter first name" 
              minLength="1" required ref={firstname => this.firstname = firstname}/>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" placeholder="Enter last name" 
              minLength="1" required ref={lastname => this.lastname = lastname}/>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter username" 
              minLength="1" required ref={username => this.username = username}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password"
              minLength="6" required ref={password => this.password = password}/>
            <label htmlFor="code">TA Authentication Code</label>
            <input type="password" id="ta-auth-code" name="ta-auth-code" placeholder="Enter authentication code"
              minLength="1" required ref={code => this.code = code}/>
            <button type="button" id="sign-up-submit" className="button" onClick={e => this.changePage(e)}>
              Sign Up
            </button>
          </form>
      </div>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////////
///////////////     Making Connect Wrap Around Ticket Submission     ///////////////
///////////////////////////////////////////////////////////////////////////////////
//Creates a connect wrap that wraps around Sign Up with a default dispatch prop
export default connect()(SignUp);