import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import services + validators
import { SignUpUser } from '../../services/auth/requests/signup.services';
import { validateSignUpUserInputs } from '../../services/auth/validators/auth.validators';

// Import styles
import { LoginText, SignUpPageContainer } from './signup.styles';

// Import custom components
import Column from '../../components/column/column.components';
import Section from '../../components/section/section.components';
import FormInput from '../../components/form-input/form-input.components';
import Card from '../../components/card/card.components';
import Margin from '../../components/margin/margin.components';
import HeadingText from '../../components/heading/heading.components';
import CopyText from '../../components/copy-text/copy-text.components';
import Link from '../../components/link/link.components';

// Import SVGs
import Form from '../../components/form/form.components';
import SubmitButton from '../../components/submit-button/submit-button.components';

// Render Component
const SignUpPage: React.FC = () => {
  // Local state
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  // Setup router
  const navigate = useNavigate();

  // SignUp user when button pressed
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    // Make sure inputs are valid
    if (validateSignUpUserInputs(emailInput, passwordInput, confirmPasswordInput).length > 0) return;

    // Sign Up user with auth
    const response = await SignUpUser(emailInput, passwordInput, confirmPasswordInput);
    console.log(response);

    // Reset state
    setEmailInput('');
    setPasswordInput('');
    setConfirmPasswordInput('');

    // Route to welcome page
    navigate('/');
  };

  // Render Sign Up Page
  return (
    <SignUpPageContainer>
      <Section
        backgroundColor='primary'
        hasColumns
        padding='0'
        minHeight='100vh'
        hasGradientBackground
        gradientColor1='primary'
        gradientColor2='secondary'
        gradientColor3='tertiary'
      >
        <Column>
          <Card>
            <HeadingText variant='h4' color='textDark'>
              Sign up
            </HeadingText>
            <Margin height='4px' width='100%' />
            <CopyText color='textLight' size={'medium'} fontWeight={200}>
              Continue to Educatr
            </CopyText>
            <Margin height='28px' width='100%' />
            <Form handleSubmit={(e) => handleSubmit(e)}>
              <FormInput
                value={emailInput}
                type='email'
                label='Email'
                inputId='email'
                onChangeStateDispatch={setEmailInput}
              />
              <FormInput
                value={passwordInput}
                type='password'
                label='Password'
                inputId='password'
                hasPassword
                onChangeStateDispatch={setPasswordInput}
              />
              <FormInput
                value={confirmPasswordInput}
                type='password'
                label='Confirm Password'
                inputId='confirmPassword'
                hasPassword
                onChangeStateDispatch={setConfirmPasswordInput}
              />
              <Margin height='12px' width='100%' />
              <SubmitButton size='x-large' backgroundColor='primary' hoverBackgroundColor='secondary' textColor='white'>
                Sign up
              </SubmitButton>
            </Form>
            <Margin />
            <LoginText>
              <CopyText size={'small'} fontWeight={300} color={'textLight'}>
                Already have an account?
              </CopyText>
              <Link
                fontSize='small'
                fontWeight={400}
                color='secondaryAccent'
                hoverColor='tertiaryAccent'
                underlineEffect='never'
                clickAction={() => navigate('/login')}
                margin='0 4px'
              >
                Log in
              </Link>
            </LoginText>
          </Card>
        </Column>
        <Column />
      </Section>
    </SignUpPageContainer>
  );
};

export default SignUpPage;
