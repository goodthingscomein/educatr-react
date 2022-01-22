import React, { useState } from 'react';

// Import styles
import { BottomBarContainer, InputFieldContainer } from './messages-bottom-bar.styles';

// Import custom components
import Button from '../button/button.components';
import TextAreaInput from '../text-area-input/text-area-input.components';

// Import custom icons
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';

// Render Component
const MessagesBottomBar: React.FC = () => {
	// Value of the input field
	const [messageInputValue, setMessageInputValue] = useState('');

	return (
		<BottomBarContainer>
			{/** ICONS */}
			<Button
				variant='text'
				padding='18px'
				margin='0 28px 0 0'
				textColor='textDark'
				hoverTextColor='primary'
				size='large'>
				<EmojiIcon fontSize='large' />
			</Button>
			{/* INPUT FIELD */}
			<InputFieldContainer>
				<TextAreaInput
					placeholder='Type a message...'
					value={messageInputValue}
					onChangeStateDispatch={setMessageInputValue}
				/>
			</InputFieldContainer>
			{/** SEND ICON */}
			<Button
				variant='text'
				padding='18px'
				margin='0 0 0 28px'
				textColor='textDark'
				hoverTextColor='primary'
				size='large'>
				<SendIcon fontSize='large' />
			</Button>
		</BottomBarContainer>
	);
};

export default MessagesBottomBar;
