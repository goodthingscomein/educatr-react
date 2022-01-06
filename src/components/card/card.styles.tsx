import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// Colored background
interface CardContainerProps {
	backgroundColor?: ColorTypes;
}

export const CardContainer = styled.div<CardContainerProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: center;
	padding: 48px 36px;
	min-height: fit-content;
	width: 80%;
	overflow: hidden;
	background-color: ${(props) => props.theme.getColor(props.backgroundColor || 'white')};
	/* border-radius: 12px; */
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
