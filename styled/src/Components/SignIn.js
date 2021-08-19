import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Text} from './ImageContainer';
import { Input, InputCheckbox, InputCheckboxText, InputSubmit } from './Input';
import FlexContainer from './FlexContainer';
import Form from './Form';
import LinkStyle from './LinkStyle';
import Footer from './Footer';



function SignIn() {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const emailHandler = e => {
  const regexp = /^\S{3,}@\S{2,}\.\D{2,}/
      setEmail(e.target.value)
      
  if (!regexp.test(e.target.value)) {
          e.target.style.borderColor="red";
    
  } else {
    e.target.style.borderColor="green"
  }
}

  const passwordHandler = e => {
  const regexp = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}/
      setPassword(e.target.value)
      
  if (!regexp.test(e.target.value)) {
          e.target.style.borderColor="red";
    
  } else {
    e.target.style.borderColor="green"
  }
}



  return (
    <>
      <Text>Sign in</Text>
      <Form>
        <Input value ={email} onChange={e=>emailHandler(e)} placeholder='Email Address*' />
        <Input value ={password} onChange={e=>passwordHandler(e)} type="password" placeholder='Password*' />
        <FlexContainer style={{marginLeft: '-280px' }}>
          <InputCheckbox type='checkbox' id='check' />
          <InputCheckboxText>Remember.me</InputCheckboxText>
        </FlexContainer>
        <InputSubmit type="submit" value="Sign In" />
      </Form>

      <FlexContainer style={{ justifyContent: 'space-between'}}>
        <LinkStyle style={{ marginRight: '90px' }}>Forgot password</LinkStyle>
        <Link style={{ textDecoration: 'none' }} to="/sign-up">
        <LinkStyle style={{ margin: '0' }}>Don't have an account? Sign Up</LinkStyle>
        </Link>
        </FlexContainer>
      <Footer>Copyright © Your website 2021.</Footer>
    </>
  )
}

export default SignIn;

