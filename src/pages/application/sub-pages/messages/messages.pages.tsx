import React from 'react';
import { MainTheme } from '../../../../themes/main.theme';

// Import styles
import { PageContainer } from './messages.styles';

// Import custom components
import HeadingText from '../../../../components/heading/heading.components';
import HorizontalDiv from '../../../../components/horizontal-div/horizontal-div.components';
import VerticalDiv from '../../../../components/vertical-div/vertical-div.components';

// Import component templates
import ContactSideNav from '../../../../template-components/messages-page/contact-side-nav/contact-side-nav.components';
import MessageTopBar_ContactDetails from '../../../../template-components/messages-page/message-top-bar_contact-details/message-top-bar_contact-details.components';
import MessageTopBar_Buttons from '../../../../template-components/messages-page/message-top-bar_buttons/message-top-bar_buttons.components';

// Render Component
const Application_MessagesPage: React.FC = () => {
	return (
		<PageContainer>
			<ContactSideNav />
			{/* MAIN CONTENT */}
			<VerticalDiv backgroundColor='transparent'>
				{/* TOP BAR */}
				<HorizontalDiv
					backgroundColor='white'
					justifyContent='space-between'
					css={`
						height: 70px;
						padding: 0 24px;
						border-bottom: 1px solid ${MainTheme.themeColors.borderColor};
					`}>
					<MessageTopBar_ContactDetails
						displayName='Jai Carey'
						activeText='Active now'
						displayImgUrl='https://robohash.org/5?set=set4&size=180x180'
					/>
					<MessageTopBar_Buttons />
				</HorizontalDiv>
				<VerticalDiv backgroundColor='white'>
					{/* 
						MESSAGES SECTION
					*/}
					<VerticalDiv backgroundColor='white'>
						<HeadingText variant='h4' color='textDark'>
							Messages Section
						</HeadingText>
					</VerticalDiv>
					{/* 
						BOTTOM MESSAGE INPUT BAR
					*/}
					<HorizontalDiv
						backgroundColor='white'
						css={`
							height: 80px;
							border-top: 1px solid ${MainTheme.themeColors.borderColor};
						`}></HorizontalDiv>
				</VerticalDiv>
			</VerticalDiv>
		</PageContainer>
	);
};

export default Application_MessagesPage;
