import React, { useState } from 'react';

// Import custom components
import Button from '../../../components/button/button.components';
import HorizontalDiv from '../../../components/horizontal-div/horizontal-div.components';

// Import component templates
import MessageOptionsDropdown from '../message-options-dropdown/message-options-dropdown.components';

// Import icons
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreIcon from '@mui/icons-material/MoreVert';

// Render Component
const MessageTopBar_Buttons: React.FC = () => {
	// Local state (For dropdowns)
	const [optionsDropdownToggle, setOptionsDropdownToggle] = useState(false);

	return (
		<HorizontalDiv
			backgroundColor='transparent'
			css={`
				width: fit-content;
			`}>
			{/* VIDEO BUTTON */}
			<Button
				variant='text'
				padding='18px'
				margin='0 8px 0 0'
				textColor='textDark'
				hoverTextColor='primary'
				size='medium'>
				<VideoCallIcon fontSize='medium' />
			</Button>
			{/* CALL BUTTON */}
			<Button
				variant='text'
				padding='18px'
				margin='0 8px 0 0'
				textColor='textDark'
				hoverTextColor='primary'
				size='medium'>
				<CallIcon fontSize='medium' />
			</Button>
			{/* OPTIONS BUTTON */}
			<Button
				variant='text'
				padding='18px'
				textColor='textDark'
				hoverTextColor='primary'
				size='medium'
				clickAction={() => setOptionsDropdownToggle(true)}>
				<MoreIcon fontSize='medium' />
			</Button>
			{/* OPTIONS DROPDOWN */}
			<MessageOptionsDropdown
				showDropdown={optionsDropdownToggle}
				clickAwayAction={() => setOptionsDropdownToggle(false)}
			/>
		</HorizontalDiv>
	);
};

export default MessageTopBar_Buttons;
