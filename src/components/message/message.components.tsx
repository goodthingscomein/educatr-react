import React from 'react';

// Import styles
import { MessageContainer } from './message.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';

// Component Props Interface
type Props = {
	children: React.ReactNode;
	ourMessage?: boolean;
	hasMessageAbove?: boolean;
	hasMessageBelow?: boolean;
};

// Render Component
const Message: React.FC<Props> = ({ children, ourMessage, hasMessageAbove, hasMessageBelow }) => (
	<MessageContainer ourMessage={ourMessage} hasMessageAbove={hasMessageAbove} hasMessageBelow={hasMessageBelow}>
		<CopyText color={ourMessage ? 'white' : 'textDark'} size='medium' fontWeight={400}>
			{children}
		</CopyText>
	</MessageContainer>
);

export default Message;
