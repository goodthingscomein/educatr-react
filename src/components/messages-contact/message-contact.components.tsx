import React from 'react';

// Import styles
import { MessagesContactContainer } from './message-contact.styles';

// Import custom components
import CircleImage from '../circle-img/circle-image.components';
import VerticalDiv from '../vertical-div/vertical-div.components';
import CopyText from '../copy-text/copy-text.components';
import Margin from '../margin/margin.components';

// Component Props Interface
type Props = {
  imageUrl: string;
  imageHeight: string;
  displayName: string;
  subText: string;
};

// Render Component
const MessagesContact: React.FC<Props> = ({ imageUrl, imageHeight, displayName, subText }) => (
  <MessagesContactContainer>
    <CircleImage
      src={imageUrl}
      altText='Display Photo'
      css={`
        height: ${imageHeight};
        width: auto;
      `}
    />
    <VerticalDiv
      backgroundColor={'transparent'}
      alignItems='flex-start'
      css={`
        width: fit-content;
        height: 100%;
        margin-left: 12px;
      `}
    >
      <CopyText size={'medium'} color={'textDark'} fontWeight={400}>
        {displayName}
      </CopyText>
      <Margin height={2} />
      <CopyText size={'x-small'} color={'textLight'} fontWeight={300}>
        {subText}
      </CopyText>
    </VerticalDiv>
  </MessagesContactContainer>
);

export default MessagesContact;
