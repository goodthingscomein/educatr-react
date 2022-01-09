import React from 'react';
import HeadingText from '../../../../components/heading/heading.components';

// Import styles
import { PageContainer } from './user-settings.styles';

// Render Component
const Application_UserSettingsPage: React.FC = () => (
	<PageContainer>
		<HeadingText variant='h1' color='white'>
			User Settings Page
		</HeadingText>
	</PageContainer>
);

export default Application_UserSettingsPage;
