import styled from 'styled-components';

export const ApplicationPageContainer = styled.div`
	width: 100%;
	height: 100vh;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const ContentContainer = styled.div`
	height: 100%;
	width: 100%;
	padding-top: ${(props) => props.theme.appBar.appBarHeight};
	padding-left: 80px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
