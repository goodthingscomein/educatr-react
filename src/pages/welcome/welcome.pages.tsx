import React from 'react';

// Import styles
import { WelcomePageButtonsContainer, WelcomePageContainer, WelcomePageContentContainer } from './welcome.styles';

// Import custom components
import HeadingText from '../../components/heading/heading.components';
import Section from '../../components/section/section.components';
import Button from '../../components/button/button.components';
import AppBar from '../../components/app-bar/app-bar.components';
import Logo from '../../components/logo/logo.components';
import Margin from '../../components/margin/margin.components';

// Render Component
const PlatformWelcomePage: React.FC = () => (
	<WelcomePageContainer>
		<AppBar color='transparent'>
			<Logo variant='h4' firstColor='white' secondColor='white' href='/'></Logo>
		</AppBar>
		<Section
			backgroundColor='secondary'
			padding='0'
			minHeight='100vh'
			hasGradientBackground
			gradientColor1='primary'
			gradientColor2='secondary'
			gradientColor3='tertiary'>
			<WelcomePageContentContainer>
				<HeadingText variant='h1' color='white'>
					Welcome to the platform
				</HeadingText>
				<HeadingText variant='h5' color='white'>
					You have successfully logged in to reach this page.
				</HeadingText>
				<Margin height={40} />
				<WelcomePageButtonsContainer>
					<Button
						variant='solid'
						size='large'
						backgroundColor='primaryAccent'
						hoverBackgroundColor='secondaryAccent'
						textColor='white'
						fontWeight={700}
						margin='0 20px'
						minWidth='10%'
						href='/login'>
						Login
					</Button>
					<Button
						variant='solid'
						size='large'
						backgroundColor='primaryAccent'
						hoverBackgroundColor='secondaryAccent'
						textColor='white'
						fontWeight={700}
						margin='0 20px'
						minWidth='10%'
						href='/signup'>
						Sign Up
					</Button>
				</WelcomePageButtonsContainer>
			</WelcomePageContentContainer>
		</Section>
	</WelcomePageContainer>
);

export default PlatformWelcomePage;
