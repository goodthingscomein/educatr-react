import React from 'react';
import { MainTheme } from '../../../themes/main.theme';

// Import custom components
import VerticalDiv from '../../../components/vertical-div/vertical-div.components';

// Import components templates
import ContactSideNavHeader from '../contact-side-nav-header/contact-side-nav-header.components';

// Render Component
const ContactSideNav: React.FC = () => (
	<VerticalDiv
		backgroundColor='white'
		alignItems='flex-start'
		css={`
			width: 20%;
			border-right: 1px solid ${MainTheme.themeColors.borderColor};
		`}>
		{/* TITLE, SEARCH, DIVIDER */}
		<ContactSideNavHeader />
	</VerticalDiv>
);

export default ContactSideNav;
