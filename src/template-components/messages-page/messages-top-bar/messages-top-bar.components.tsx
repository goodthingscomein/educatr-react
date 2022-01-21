import React from 'react';
import { MainTheme } from '../../../themes/main.theme';

// Import custom components
import HorizontalDiv from '../../../components/horizontal-div/horizontal-div.components';
import MessagesTopBar_Buttons from '../messages-top-bar_buttons/messages-top-bar_buttons.components';
import MessagesTopBar_ContactDetails from '../messages-top-bar_contact-details/messages-top-bar_contact-details.components';

// Render Component
const MessagesTopBar: React.FC = () => (
	<HorizontalDiv
		backgroundColor='white'
		justifyContent='space-between'
		css={`
			flex-basis: 70px;
			flex-shrink: 0;
			padding: 0 24px;
			border-bottom: 1px solid ${MainTheme.themeColors.borderColor};
		`}>
		{/* WE MUST MAKE SURE THAT THESE CONTACT DETAILS READ REDUX FOR SELECTED USER */}
		<MessagesTopBar_ContactDetails
			displayName='Jai Carey'
			activeText='Active now'
			displayImgUrl='https://robohash.org/5?set=set4&size=180x180'
		/>
		<MessagesTopBar_Buttons />
	</HorizontalDiv>
);

export default MessagesTopBar;
