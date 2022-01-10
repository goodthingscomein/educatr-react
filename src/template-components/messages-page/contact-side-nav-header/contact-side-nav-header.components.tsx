import React from 'react';

// Import custom components
import Divider from '../../../components/divider/divider.components';
import HeadingText from '../../../components/heading/heading.components';
import VerticalDiv from '../../../components/vertical-div/vertical-div.components';

// Render Component
const ContactSideNavHeader: React.FC = () => (
	<VerticalDiv backgroundColor='transparent' justifyContent='flex-start'>
		<VerticalDiv
			backgroundColor='transparent'
			justifyContent='flex-start'
			alignItems='flex-start'
			css={`
				padding: 12px 24px;
				height: fit-content;
			`}>
			<HeadingText variant='h4' color='textDark'>
				Messages
			</HeadingText>
		</VerticalDiv>
		<Divider color='dark' />
	</VerticalDiv>
);

export default ContactSideNavHeader;
