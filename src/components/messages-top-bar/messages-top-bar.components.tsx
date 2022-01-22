import React from 'react';

// Import styles
import { TopBarContainer, ItemsContainer } from './messages-top-bar.styles';

// Import custom components
import Button from '../button/button.components';
import CircleImage from '../circle-img/circle-image.components';
import CopyText from '../copy-text/copy-text.components';
import Margin from '../margin/margin.components';
import VerticalDiv from '../vertical-div/vertical-div.components';

// Import custom icons
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import OptionsIcon from '@mui/icons-material/MoreVert';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
};

// Render Component
const MessagesTopBar: React.FC<Props> = () => {
	return (
		<TopBarContainer>
			{/* Left side */}
			<ItemsContainer>
				<CircleImage
					src='https://picsum.photos/80/80?random=1'
					altText='Display Photo'
					css={`
						height: 50px;
						width: auto;
					`}
				/>
				<VerticalDiv
					backgroundColor={'transparent'}
					alignItems='flex-start'
					css={`
						width: fit-content;
						height: 100%;
						margin-left: 16px;
					`}>
					<CopyText size={'large'} color={'textDark'} fontWeight={700}>
						Jai Carey
					</CopyText>
					<Margin height={2} />
					<CopyText size={'small'} color={'textLight'} fontWeight={300}>
						Active 24 mins ago.
					</CopyText>
				</VerticalDiv>
			</ItemsContainer>
			{/* Right side */}
			<ItemsContainer>
				<Button
					variant='text'
					padding='18px'
					margin='0 12px 0 0'
					textColor='textDark'
					hoverTextColor='primary'
					size='medium'>
					<OptionsIcon fontSize='medium' />
				</Button>
				<Button
					variant='text'
					padding='18px'
					margin='0 12px 0 0'
					textColor='textDark'
					hoverTextColor='primary'
					size='medium'>
					<CallIcon fontSize='medium' />
				</Button>
				<Button variant='text' padding='18px' textColor='textDark' hoverTextColor='primary' size='medium'>
					<VideoCallIcon fontSize='medium' />
				</Button>
			</ItemsContainer>
		</TopBarContainer>
	);
};

export default MessagesTopBar;
