import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import services + validators
import { SignUpUser } from '../../services/auth/requests/signup.services';
import { validateSignUpUserInputs } from '../../services/auth/validators/auth.validators';

// Import styles
import { LoginText, SignUpPageContainer } from './signup.styles';

// Import custom components
import AppBar from '../../components/app-bar/app-bar.components';
import Column from '../../components/column/column.components';
import Logo from '../../components/logo/logo.components';
import Section from '../../components/section/section.components';
import Input from '../../components/input/input.components';
import Card from '../../components/card/card.components';
import Margin from '../../components/margin/margin.components';
import HeadingText from '../../components/heading/heading.components';
import CopyText from '../../components/copy-text/copy-text.components';
import Link from '../../components/link/link.components';

// Import SVGs
import { ReactComponent as SignUpHeroImage } from '../../assets/images/signup/sign-up-orange.svg';
import SvgContainer from '../../components/svg-container/svg-container.components';
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
		navigate('/app');
	};

	// Render Sign Up Page
	return (
		<SignUpPageContainer>
			<AppBar color='transparent'>
				<Logo variant='h4' firstColor='white' secondColor='white' href='/'></Logo>
			</AppBar>
			<Section
				backgroundColor='primaryAccent'
				hasColumns
				padding='0'
				minHeight='100vh'
				hasGradientBackground
				gradientColor1='primaryAccent'
				gradientColor2='secondaryAccent'
				gradientColor3='tertiaryAccent'>
				<Column>
					<Card>
						<HeadingText variant='h4' color='textDark'>
							Sign up
						</HeadingText>
						<Margin height={4} />
						<CopyText color='textLight' size={'medium'} fontWeight={200}>
							Continue to Datafluence
						</CopyText>
						<Margin height={28} />
						<Form handleSubmit={(e) => handleSubmit(e)}>
							<Input
								value={emailInput}
								type='email'
								label='Email'
								inputId='email'
								onChangeStateDispatch={setEmailInput}
							/>
							<Input
								value={passwordInput}
								type='password'
								label='Password'
								inputId='password'
								hasPassword
								onChangeStateDispatch={setPasswordInput}
							/>
							<Input
								value={confirmPasswordInput}
								type='password'
								label='Confirm Password'
								inputId='confirmPassword'
								hasPassword
								onChangeStateDispatch={setConfirmPasswordInput}
							/>
							<Margin height={12} />
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
								fontWeight={300}
								color='primaryAccent'
								hoverColor='tertiaryAccent'
								underlineEffect='never'
								href='login'
								margin='0 4px'>
								Log in
							</Link>
						</LoginText>
					</Card>
				</Column>
				<Column>
					<SvgContainer scalePercent={65} posTranslate='-10%, -15%'>
						<SignUpHeroImage />
					</SvgContainer>
				</Column>
			</Section>
		</SignUpPageContainer>
	);
};

export default SignUpPage;
