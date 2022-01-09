import styled from 'styled-components';

// Colored background
interface ScreenOverlayContainerProps {
	backgroundColor?: string;
}

export const ScreenOverlayContainer = styled.div<ScreenOverlayContainerProps>`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: ${(props) => props.backgroundColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 998;
	transition: 0.3s;
	pointer-events: none;
`;
