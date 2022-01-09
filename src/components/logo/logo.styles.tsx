import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

type LogoLinkProps = {
	padding?: string;
};

export const LogoLink = styled.a<LogoLinkProps>`
	margin: 0;
	padding: ${(props) => props.padding || 0};
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

// Logo Color
type LogoTextColorProps = {
	color: ColorTypes;
};

export const LogoTextColor = styled.span<LogoTextColorProps>`
	color: ${(props) => props.theme.getColor(props.color)};
	text-transform: uppercase;
	font-weight: 700;
`;
