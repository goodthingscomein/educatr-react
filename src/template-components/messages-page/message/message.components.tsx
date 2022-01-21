import React from 'react';
import CopyText from '../../../components/copy-text/copy-text.components';
import HorizontalDiv from '../../../components/horizontal-div/horizontal-div.components';

// Component Props Interface
type Props = {
	children: React.ReactNode;
	ourMessage?: boolean;
	hasMessageAbove?: boolean;
	hasMessageBelow?: boolean;
};

// Render Component
const Message: React.FC<Props> = ({ children, ourMessage, hasMessageAbove, hasMessageBelow }) => (
	<HorizontalDiv
		backgroundColor={ourMessage ? 'primary' : 'lightGrey'}
		css={`
			height: fit-content;
			width: fit-content;
			max-width: 40%;
			align-self: ${ourMessage ? 'flex-end' : 'flex-start'};
			padding: 12px;
			margin-top: 8px;
			border-radius: ${ourMessage
				? `16px ${hasMessageAbove ? '4px' : '16px'} ${hasMessageBelow ? '4px' : '16px'} 16px`
				: `${hasMessageAbove ? '4px' : '16px'} 16px 16px ${hasMessageBelow ? '4px' : '16px'}`};
		`}>
		<CopyText color={ourMessage ? 'white' : 'textDark'} size='medium' fontWeight={400}>
			{children}
		</CopyText>
	</HorizontalDiv>
);

export default Message;
