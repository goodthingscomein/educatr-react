import styled from 'styled-components';

export const PageContainer = styled.div`
	width: 100%;
	height: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PageHeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 1rem 2rem;
`;

export const GridContainer = styled.div`
	flex: 1 0 0;
	padding: 1rem 3rem 2rem;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(7, minmax(0, 1fr));
	grid-template-rows: repeat(3, minmax(0, 1fr));
	gap: 24px;
	overflow-y: auto;
`;

export const GridItem = styled.div`
	background-color: ${(props) => props.theme.themeColors.white};
	border-radius: 24px;
	display: flex;
	flex-direction: column;
	padding: 28px 24px;
`;
