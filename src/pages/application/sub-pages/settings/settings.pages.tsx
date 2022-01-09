import React from 'react';
import HeadingText from '../../../../components/heading/heading.components';

// Import styles
import { PageContainer } from './settings.styles';

// Render Component
const Application_SettingsPage: React.FC = () => (
	<PageContainer>
		<HeadingText variant='h1' color='white'>
			Settings Page
		</HeadingText>
	</PageContainer>
);

export default Application_SettingsPage;
