import styled from 'styled-components';

// Import shared styling
import { SharedStyleProps, SharedCssStyles } from '../component-styles';

export const CircleImageContainer = styled.img<SharedStyleProps>`
	overflow: hidden;
	border-radius: 50px;
	${SharedCssStyles}
`;
