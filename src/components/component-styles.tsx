import { css } from 'styled-components';

// Root Props
export interface SharedStyleProps {
	css?: string;
}

export const SharedCssStyles = css<SharedStyleProps>`
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	${(props) => props.css}
`;
