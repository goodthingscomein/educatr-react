import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import services + validators
import { LoginUser } from '../../services/auth/requests/login.services';
import { validateLoginUserInputs } from '../../services/auth/validators/auth.validators';

// Import styles
import { LoginPageContainer, SignUpText, ContentContainer } from './login.styles';

// Import custom components
import FormCard from '../../components/form-card/form-card.components';
import CopyText from '../../components/copy-text/copy-text.components';
import HeadingText from '../../components/heading-text/heading-text.components';
import FormInput from '../../components/form-input/form-input.components';
import Link from '../../components/link/link.components';
import Margin from '../../components/margin/margin.components';
import GradientContainer from '../../components/gradient-container/gradient-container.components';

// Import SVGs
import Form from '../../components/form/form.components';
import SubmitButton from '../../components/submit-button/submit-button.components';

// Render Component
const LoginPage: React.FC = () => {
  // Local state
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // Setup router
  const navigate = useNavigate();

  // Register user when button pressed
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    // Make sure inputs are valid
    if (validateLoginUserInputs(emailInput).length > 0) return;

    // Sign Up user with auth
    const response = await LoginUser(emailInput, passwordInput);
    console.log(response);

    // Reset state
    setEmailInput('');
    setPasswordInput('');

    // Route to welcome page
    navigate('/');
  };

  // Render Login Page
  return (
    <LoginPageContainer>
      <GradientContainer gradientColor1='primary' gradientColor2='secondary' gradientColor3='tertiary'>
        <ContentContainer>
          <FormCard>
            <HeadingText variant='h4' color='textDark'>
              Log in
            </HeadingText>
            <Margin height='4px' width='100%' />
            <CopyText color='textLight' size={'medium'} fontWeight={200}>
              Continue to Educatr
            </CopyText>
            <Margin height='40px' />
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
              <Margin height='12px' width='100%' />
              <SubmitButton size='x-large' backgroundColor='primary' hoverBackgroundColor='secondary' textColor='white'>
                Log in
              </SubmitButton>
            </Form>
            <Margin />
            <SignUpText>
              <CopyText size={'small'} fontWeight={300} color={'textLight'}>
                New to Educatr?
              </CopyText>
              <Link
                fontSize='small'
                fontWeight={400}
                color='secondaryAccent'
                hoverColor='tertiaryAccent'
                underlineEffect='never'
                clickAction={() => navigate('/signup')}
                margin='0 4px'
              >
                Get started
              </Link>
            </SignUpText>
          </FormCard>
        </ContentContainer>
      </GradientContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
