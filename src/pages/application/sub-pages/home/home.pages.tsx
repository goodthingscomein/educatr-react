import React from 'react';
import Button from '../../../../components/button/button.components';
import HeadingText from '../../../../components/heading/heading.components';
import Margin from '../../../../components/margin/margin.components';

// Import styles
import { PageContainer, PageButtonsContainer } from './home.styles';

// Render Component
const Application_HomePage: React.FC = () => (
	<PageContainer>
		<HeadingText variant='h1' color='white'>
			Welcome to the platform
		</HeadingText>
		<HeadingText variant='h5' color='white'>
			You have successfully logged in to reach this page.
		</HeadingText>
		<Margin height={40} />
		<PageButtonsContainer>
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
		</PageButtonsContainer>
	</PageContainer>
);

export default Application_HomePage;
