import React from 'react';

// Import custom components
import CircleImage from '../../../components/circle-img/circle-image.components';
import CopyText from '../../../components/copy-text/copy-text.components';
import HorizontalDiv from '../../../components/horizontal-div/horizontal-div.components';
import VerticalDiv from '../../../components/vertical-div/vertical-div.components';

// Props
type Props = {
	displayName: string;
	activeText: string;
	displayImgUrl: string;
};

// Render Component
const MessageTopBar_ContactDetails: React.FC<Props> = ({ displayName, activeText, displayImgUrl }) => (
	<HorizontalDiv
		backgroundColor='transparent'
		css={`
			width: fit-content;
		`}>
		{/* PHOTO */}
		<VerticalDiv
			backgroundColor='transparent'
			justifyContent='center'
			css={`
				width: fit-content;
				height: fit-content;
				margin-right: 12px;
			`}>
			<CircleImage
				src={displayImgUrl}
				altText='Display Photo'
				css={`
					height: 40px;
					width: auto;
				`}
			/>
		</VerticalDiv>
		{/*  CHAT PERSON NAME + ACTIVE STATUS */}
		<VerticalDiv backgroundColor='transparent' justifyContent='center' alignItems='flex-start'>
			<CopyText color='textDark' size='large' fontWeight={400}>
				{displayName}
			</CopyText>
			<CopyText color='textLight' size='x-small' fontWeight={400}>
				{activeText}
			</CopyText>
		</VerticalDiv>
	</HorizontalDiv>
);

export default MessageTopBar_ContactDetails;
