import React from 'react';
import { MainTheme } from '../../../themes/main.theme';

// Import custom components
import VerticalDiv from '../../../components/vertical-div/vertical-div.components';

// Import components templates
import ContactSideNavHeader from '../contact-side-nav-header/contact-side-nav-header.components';
import Button from '../../../components/button/button.components';
import CopyText from '../../../components/copy-text/copy-text.components';
import HorizontalDiv from '../../../components/horizontal-div/horizontal-div.components';
import CircleImage from '../../../components/circle-img/circle-image.components';

// Render Component
const ContactSideNav: React.FC = () => (
	<VerticalDiv
		backgroundColor='white'
		alignItems='flex-start'
		justifyContent='flex-start'
		css={`
			width: 20%;
			border-right: 1px solid ${MainTheme.themeColors.borderColor};
		`}>
		<ContactSideNavHeader />
		<VerticalDiv
			backgroundColor='transparent'
			alignItems='center'
			justifyContent='flex-start'
			css={`
				flex: 1 0 0;
				width: 100%;
				overflow-x: hidden;
				overflow-y: auto;
			`}>
			<Button
				variant='solid'
				size='medium'
				backgroundColor='lightGrey'
				hoverBackgroundColor='darken'
				textColor='textDark'
				entireWidth
				padding='18px 24px'>
				<HorizontalDiv backgroundColor='transparent' alignItems='center' justifyContent='center'>
					<VerticalDiv
						backgroundColor='transparent'
						justifyContent='center'
						alignItems='center'
						css={`
							height: 28px;
							width: 28px;
							margin-right: 8px;
						`}>
						<CircleImage src='https://robohash.org/5?set=set4&size=180x180' altText='display photo' />
					</VerticalDiv>
					<VerticalDiv backgroundColor='transparent' alignItems='flex-start'>
						<CopyText color='textDark' size='medium'>
							Jai Carey
						</CopyText>
						<CopyText color='textLight' size='x-small'>
							Last active 25 mins ago
						</CopyText>
					</VerticalDiv>
				</HorizontalDiv>
			</Button>
		</VerticalDiv>
	</VerticalDiv>
);

export default ContactSideNav;
