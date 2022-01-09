import React from 'react';
import Button from '../../../../components/button/button.components';
import HeadingText from '../../../../components/heading/heading.components';
import Margin from '../../../../components/margin/margin.components';

// Import styles
import { WelcomePageButtonsContainer, WelcomePageContainer } from './welcome.styles';

// Render Component
const WelcomeSubPage: React.FC = () => (
	<WelcomePageContainer>
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
	</WelcomePageContainer>
);

export default WelcomeSubPage;
