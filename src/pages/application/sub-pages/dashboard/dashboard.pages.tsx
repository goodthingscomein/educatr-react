import React from 'react';
import HeadingText from '../../../../components/heading/heading.components';

// Import styles
import { PageContainer } from './dashboard.styles';

// Render Component
const Application_DashboardPage: React.FC = () => (
	<PageContainer>
		<HeadingText variant='h1' color='white'>
			Dashboard Page
		</HeadingText>
	</PageContainer>
);

export default Application_DashboardPage;
