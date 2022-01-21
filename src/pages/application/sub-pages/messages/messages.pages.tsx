import React from 'react';

// Import styles
import { PageContainer } from './messages.styles';

// Import custom components
import VerticalDiv from '../../../../components/vertical-div/vertical-div.components';

// Import component templates
import ContactSideNav from '../../../../template-components/messages-page/contact-side-nav/contact-side-nav.components';
import MessagesTopBar from '../../../../template-components/messages-page/messages-top-bar/messages-top-bar.components';
import MessagesContainer from '../../../../template-components/messages-page/messages-container/messages-container.components';
import MessagesInputBar from '../../../../template-components/messages-page/messages-input-bar/messages-input-bar.components';

// Render Component
const Application_MessagesPage: React.FC = () => {
	return (
		<PageContainer>
			<ContactSideNav />
			<VerticalDiv
				backgroundColor='transparent'
				css={`
					height: 100%;
					width: 100%;
					overflow: hidden;
				`}>
				<MessagesTopBar />
				<MessagesContainer />
				<MessagesInputBar />
			</VerticalDiv>
		</PageContainer>
	);
};

export default Application_MessagesPage;
