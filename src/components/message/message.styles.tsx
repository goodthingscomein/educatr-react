import styled from 'styled-components';

// Message Container Props
type MessageContainerProps = {
	ourMessage?: boolean;
	hasMessageAbove?: boolean;
	hasMessageBelow?: boolean;
};

export const MessageContainer = styled.div<MessageContainerProps>`
	background-color: ${(props) =>
		props.ourMessage ? props.theme.themeColors.primary : props.theme.themeColors.lightGrey};
	height: fit-content;
	width: fit-content;
	max-width: 40%;
	align-self: ${(props) => (props.ourMessage ? 'flex-end' : 'flex-start')};
	padding: 12px;
	margin-top: 8px;
	border-radius: ${(props) =>
		props.ourMessage
			? `16px ${props.hasMessageAbove ? '4px' : '16px'} ${props.hasMessageBelow ? '4px' : '16px'} 16px`
			: `${props.hasMessageAbove ? '4px' : '16px'} 16px 16px ${props.hasMessageBelow ? '4px' : '16px'}`};
`;
