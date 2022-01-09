import styled from 'styled-components';

// Divider Container Props
type DividerContainerProps = {
	color: 'light' | 'dark';
	margin?: string;
};

export const DividerContainer = styled.hr<DividerContainerProps>`
	border-top: 2px solid ${(props) => (props.color === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)')};
	min-width: 100%;
	margin: ${(props) => props.margin || '8px 0'};
`;
