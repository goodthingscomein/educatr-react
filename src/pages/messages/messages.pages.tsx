import React, { useState } from 'react';
import HeadingText from '../../components/heading/heading.components';
import Input from '../../components/input/input.components';
import Margin from '../../components/margin/margin.components';
import Message from '../../components/message/message.components';
import MessagesBottomBar from '../../components/messages-bottom-bar/messages-bottom-bar.components';
import MessagesTopBar from '../../components/messages-top-bar/messages-top-bar.components';

// Import styles
import {
	PageContainer,
	Drawer,
	DrawerHeader,
	DrawerContent,
	ContentContainer,
	MessagesContainer,
} from './messages.styles';

// Import custom components

// Render Component
const MessagesPage: React.FC = () => {
	const [searchValue, setSearchValue] = useState('');
	return (
		<PageContainer>
			<Drawer>
				<DrawerHeader>
					<HeadingText variant='h5' color='textDark'>
						Messages
					</HeadingText>
					<Margin height={18} />
					<Input placeholder='Search...' value={searchValue} onChangeStateDispatch={setSearchValue} />
				</DrawerHeader>
				<DrawerContent></DrawerContent>
			</Drawer>
			<ContentContainer>
				<MessagesTopBar />
				<MessagesContainer>
					<Message ourMessage hasMessageAbove>
						Test message!! but this one is longer
					</Message>
					<Message ourMessage hasMessageBelow>
						Test message!! This is the second message that has been sent, as in this is the second message from the
						start of the array
					</Message>
					<Message hasMessageAbove>Test message!!</Message>
					<Message hasMessageBelow hasMessageAbove>
						Test message!!
					</Message>
					<Message hasMessageBelow>Test message!!</Message>
					<Message ourMessage hasMessageAbove>
						Test message!!
					</Message>
					<Message ourMessage hasMessageBelow hasMessageAbove>
						Test message!!
					</Message>
					<Message ourMessage hasMessageBelow>
						Test message!! but this one is longer
					</Message>
					<Message ourMessage hasMessageAbove>
						Test message!! but this one is longer
					</Message>
					<Message ourMessage hasMessageBelow>
						Test message!! This is the second message that has been sent, as in this is the second message from the
						start of the array
					</Message>
					<Message hasMessageAbove>Test message!!</Message>
					<Message hasMessageBelow hasMessageAbove>
						Test message!!
					</Message>
				</MessagesContainer>
				<MessagesBottomBar />
			</ContentContainer>
		</PageContainer>
	);
};

export default MessagesPage;
