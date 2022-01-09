import styled from 'styled-components';

export const ApplicationPageContainer = styled.div`
	width: 100%;
	height: 100vh;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const ApplicationPageDrawerContainer = styled.div`
	width: 100%;
	height: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const SideDrawerLinksContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
