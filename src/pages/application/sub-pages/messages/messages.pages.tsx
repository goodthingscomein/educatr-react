import React, { useState } from 'react';
import { MainTheme } from '../../../../themes/main.theme';

// Import styles
import { PageContainer } from './messages.styles';

// Import custom components
import Button from '../../../../components/button/button.components';
import CopyText from '../../../../components/copy-text/copy-text.components';
import HeadingText from '../../../../components/heading/heading.components';
import HorizontalDiv from '../../../../components/horizontal-div/horizontal-div.components';
import VerticalDiv from '../../../../components/vertical-div/vertical-div.components';
import Dropdown from '../../../../components/dropdown/dropdown-components';

// Import icons
import AccountIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreIcon from '@mui/icons-material/MoreVert';

// Render Component
const Application_MessagesPage: React.FC = () => {
	// Local state (For dropdowns)
	const [optionsDropdownToggle, setOptionsDropdownToggle] = useState(false);

	return (
		<PageContainer>
			{/* SIDE NAV */}
			<VerticalDiv
				backgroundColor='white'
				alignItems='flex-start'
				css={`
					width: 20%;
					border-right: 1px solid ${MainTheme.themeColors.textLight};
				`}>
				<HeadingText variant='h4' color='textDark'>
					Chats
				</HeadingText>
			</VerticalDiv>
			{/* MAIN CONTENT */}
			<VerticalDiv backgroundColor='transparent'>
				{/* TOP BAR */}
				<HorizontalDiv
					backgroundColor='white'
					justifyContent='space-between'
					css={`
						height: 60px;
						padding: 0 24px;
						border-bottom: 1px solid ${MainTheme.themeColors.textLight};
					`}>
					{/* 
					CHAT PERSON DETAILS
				*/}
					<HorizontalDiv
						backgroundColor='transparent'
						css={`
							width: fit-content;
						`}>
						{/* 
						CHAT PERSON PHOTO
					*/}
						<VerticalDiv
							backgroundColor='transparent'
							justifyContent='center'
							css={`
								width: fit-content;
								height: fit-content;
								padding: 8px;
								margin-right: 24px;
								margin-left: 8px;
							`}>
							<AccountIcon fontSize='large' />
						</VerticalDiv>
						{/* 
						CHAT PERSON NAME + ACTIVE STATUS
					*/}
						<VerticalDiv backgroundColor='transparent' justifyContent='center' alignItems='flex-start'>
							<CopyText color='textDark' size='medium' fontWeight={700}>
								Contact Name
							</CopyText>
							<CopyText color='textLight' size='small' fontWeight={300}>
								Active now
							</CopyText>
						</VerticalDiv>
					</HorizontalDiv>
					{/* 
					VIDEO CALL, CALL, OPTIONS ICONS 
				*/}
					<HorizontalDiv
						backgroundColor='transparent'
						css={`
							width: fit-content;
						`}>
						<Button
							variant='text'
							padding='18px'
							margin='0 8px 0 0'
							textColor='textDark'
							hoverTextColor='primary'
							size='medium'>
							<VideoCallIcon fontSize='medium' />
						</Button>
						<Button
							variant='text'
							padding='18px'
							margin='0 8px 0 0'
							textColor='textDark'
							hoverTextColor='primary'
							size='medium'>
							<CallIcon fontSize='medium' />
						</Button>
						<Button
							variant='text'
							padding='18px'
							textColor='textDark'
							hoverTextColor='primary'
							size='medium'
							clickAction={() => setOptionsDropdownToggle(true)}>
							<MoreIcon fontSize='medium' />
						</Button>
						{/* 
							OPTIONS DROPDOWN
						*/}
						<Dropdown
							backgroundColor='white'
							displayDropDown={optionsDropdownToggle}
							clickAwayAction={() => setOptionsDropdownToggle(false)}
							css={`
								top: 20px;
								right: 0;
								border: 1px solid rgba(0, 0, 0, 0.5);
								border-top: none;
								padding: 12px 0;
							`}>
							<Button
								variant='solid'
								size='medium'
								backgroundColor='transparent'
								hoverBackgroundColor='lightGrey'
								textColor='textDark'
								minWidth='220px'>
								Test Button
							</Button>
							<Button
								variant='solid'
								size='medium'
								backgroundColor='transparent'
								hoverBackgroundColor='lightGrey'
								textColor='textDark'
								minWidth='220px'>
								Test Button
							</Button>
							<Button
								variant='solid'
								size='medium'
								backgroundColor='transparent'
								hoverBackgroundColor='lightGrey'
								textColor='textDark'
								minWidth='220px'>
								Test Button
							</Button>
						</Dropdown>
					</HorizontalDiv>
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
							border-top: 1px solid ${MainTheme.themeColors.textLight};
						`}></HorizontalDiv>
				</VerticalDiv>
			</VerticalDiv>
		</PageContainer>
	);
};

export default Application_MessagesPage;
