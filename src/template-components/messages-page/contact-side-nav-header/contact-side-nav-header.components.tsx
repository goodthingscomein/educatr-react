import React from 'react';
import Button from '../../../components/button/button.components';
import CopyText from '../../../components/copy-text/copy-text.components';

// Import custom components
import Divider from '../../../components/divider/divider.components';
import HeadingText from '../../../components/heading/heading.components';
import HorizontalDiv from '../../../components/horizontal-div/horizontal-div.components';
import VerticalDiv from '../../../components/vertical-div/vertical-div.components';

// Import icons
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Render Component
const ContactSideNavHeader: React.FC = () => (
	<VerticalDiv
		backgroundColor='transparent'
		justifyContent='flex-start'
		css={`
			width: 100%;
			height: fit-content;
		`}>
		<VerticalDiv
			backgroundColor='transparent'
			justifyContent='flex-start'
			alignItems='flex-start'
			css={`
				padding: 12px 24px;
				height: fit-content;
			`}>
			<HorizontalDiv
				backgroundColor='transparent'
				alignItems='center'
				justifyContent='space-between'
				css={`
					width: 100%;
				`}>
				<HeadingText variant='h4' color='textDark'>
					Messages
				</HeadingText>
				<Button
					variant='text'
					padding='8px'
					margin='0 -8px 0 0'
					textColor='textDark'
					hoverTextColor='textLight'
					size='medium'>
					<MoreVertIcon fontSize='medium' />
				</Button>
			</HorizontalDiv>
			<VerticalDiv
				backgroundColor='lightGrey'
				alignItems='flex-start'
				justifyContent='center'
				css={`
					height: 28px;
					width: 100%;
					padding: 12px;
					margin-top: 12px;
				`}>
				<CopyText color='textLight' size='small'>
					Search...
				</CopyText>
			</VerticalDiv>
		</VerticalDiv>
		<Divider color='dark' margin='8px 0 0 0' />
	</VerticalDiv>
);

export default ContactSideNavHeader;
