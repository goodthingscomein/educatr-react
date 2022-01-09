import React from 'react';
import HeadingText from '../../../../components/heading/heading.components';

// Import styles
import { PageContainer } from './find-influencers.styles';

// Render Component
const Application_FindInfluencersPage: React.FC = () => (
	<PageContainer>
		<HeadingText variant='h1' color='white'>
			Find Influencers Page
		</HeadingText>
	</PageContainer>
);

export default Application_FindInfluencersPage;
