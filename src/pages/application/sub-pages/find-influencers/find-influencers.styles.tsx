import styled from 'styled-components';

export const PageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.themeColors.lightGrey};
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: auto;
`;

export const PageHeaderContainer = styled.div`
	background-color: ${(props) => props.theme.themeColors.transparent};
	flex: 0 1 60px;
	width: 100%;
	margin-top: 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 4rem;
`;

export const ContentContainer = styled.div`
	flex: 1 0 0;
	padding: 2rem 4rem;
	width: 100%;
	min-height: 0;
	min-width: 0;
`;

export const GridContainer = styled.div`
	width: 100%;
	margin-bottom: 40px;
	min-height: 0;
	min-width: 0;
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	grid-auto-rows: 460px;
	gap: 24px;
`;
