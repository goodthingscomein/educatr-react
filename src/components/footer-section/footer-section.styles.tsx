import styled from 'styled-components';

export const FooterContentContainer = styled.div`
	width: 100%;
	min-height: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
`;

export const FooterLinkContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const FooterButtonsContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export const BadgeListContainer = styled.div`
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export const AppStoreBadgeContainer = styled.a`
	min-width: fit-content;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 12px;
	cursor: pointer;

	svg {
		position: relative;
		height: 40px;
		width: auto;
	}
`;

export const PlayStoreBadgeContainer = styled.a`
	width: fit-content;
	height: fit-content;
	cursor: pointer;

	img {
		height: 40px;
		width: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
