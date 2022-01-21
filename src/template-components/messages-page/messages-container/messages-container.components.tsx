import React from 'react';

// Import custom components
import VerticalDiv from '../../../components/vertical-div/vertical-div.components';
import MessagesTemplate from '../../development/messages-template.components';

// Render Component
const MessagesContainer: React.FC = () => (
	<VerticalDiv
		backgroundColor='white'
		css={`
			flex-direction: column-reverse;
			padding: 24px;
			padding-right: 60px;
			flex: 1 0 0;
			overflow-x: hidden;
			overflow-y: auto;
		`}>
		<MessagesTemplate /> {/* TEMPLATE DEVELOPMENT TEXT CHAT MESSAGES */}
	</VerticalDiv>
);

export default MessagesContainer;
