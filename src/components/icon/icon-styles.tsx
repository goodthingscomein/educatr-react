import styled from 'styled-components';

// Icon Container Props
type IconContainerProps = {
	padding?: string;
	margin?: string;
};

export const IconContainer = styled.div<IconContainerProps>`
	margin: ${(props) => props.margin || 0};
	padding: ${(props) => props.padding || 0};
	color: inherit;
	background-color: ${(props) => props.theme.themeColors.transparent};
	display: flex;
	justify-content: center;
	align-items: center;
`;
