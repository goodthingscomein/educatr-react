import React from 'react';
import { MainTheme } from '../../../themes/main.theme';

// Import custom components
import HorizontalDiv from '../../../components/horizontal-div/horizontal-div.components';

// Render Component
const MessagesInputBar: React.FC = () => (
	<HorizontalDiv
		backgroundColor='white'
		css={`
			flex-basis: 60px;
			flex-shrink: 0;
			border-top: 1px solid ${MainTheme.themeColors.borderColor};
		`}></HorizontalDiv>
);

export default MessagesInputBar;
