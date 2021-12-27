import React from 'react';

// Import styles
import { HomepageContainer } from './hompage.styles';

// Custom Components
import AppBar from '../../components/app-bar/app-bar.components';
import Logo from '../../components/logo/logo.components';
import Button from '../../components/button/button.components';

// Homepage Functional Component
const Homepage: React.FC = () => {
	return (
		<HomepageContainer>
			<AppBar color='textDark'>
				<Logo variant='h4' firstColor='primary' secondColor='white' />
				<Button variant='text' color='primary'>
					Test Button
				</Button>
			</AppBar>
		</HomepageContainer>
	);
};

export default Homepage;
