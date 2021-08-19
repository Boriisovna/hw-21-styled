import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, InputCheckbox,InputCheckboxText, InputSubmit } from './Input';
import Form from './Form';
import FlexContainer from './FlexContainer';
import LinkStyle from './LinkStyle';
import Footer from './Footer';
import {Text} from './ImageContainer';


function SignUp() {

    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');



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
            <Text>Sign up</Text>
            <Form>
                <FlexContainer>
                    <Input type="text" placeholder='First Name*' style={{
                        width: '193px'
                    }} />
                    <Input type="text" placeholder='Last Name*' style={{
                        width: '193px'
                    }} />
                </FlexContainer>
                <Input value ={email} onChange={e=>emailHandler(e)} placeholder='Email Address*' />
                <Input value ={password} onChange={e=>passwordHandler(e)} type="password" placeholder='Password*' />
                <FlexContainer style={{ justifyContent: 'flex-start', marginLeft: '-115px' }}>
                    <InputCheckbox type='checkbox' id='check' />
                    <InputCheckboxText>I want to receive inspiration, marketing<br />
                        promotions and updates via email</InputCheckboxText>
                </FlexContainer>
                <InputSubmit type="submit" value="Sign up" />
            </Form>
            <Link style={{ textDecoration: 'none' }} to="/signin">
                <LinkStyle style={{ marginLeft: '180px' }}> Already have an account? Sign in</LinkStyle>
            </Link>
            <Footer>Copyright © Your website 2021.</Footer>
        </>
    )
}

export default SignUp;
