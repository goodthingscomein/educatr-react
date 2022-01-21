import styled from 'styled-components';

// Props
type ProfileCardContainerProps = {
	imageUrl: string;
};

export const ProfileCardContainer = styled.div<ProfileCardContainerProps>`
	position: relative;
	min-height: 0;
	min-width: 0;
	padding: 20px 24px;
	background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${(props) => props.imageUrl});
	background-position: center;
	background-size: cover;
	border-radius: 24px;
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
	:hover {
		background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url(${(props) => props.imageUrl});
		background-position: center;
		background-size: cover;
	}
`;

export const ButtonsContainer = styled.div`
	display: none;
	width: 100%;
	margin-top: 6px;

	${ProfileCardContainer}:hover & {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;
