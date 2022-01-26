import React from 'react';

// Import styles
import { ProfileCardContainer, ButtonsContainer } from './profile-card.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';
import HeadingText from '../heading/heading.components';
import Margin from '../margin/margin.components';
import VerticalDiv from '../vertical-div/vertical-div.components';
import Button from '../button/button.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';

// Component Props Interface
type Props = {
  imageUrl: string;
  displayName: string;
  blurb: string;
};

// Render Component
const ProfileCard: React.FC<Props> = ({ imageUrl, displayName, blurb }) => (
  <ProfileCardContainer imageUrl={imageUrl}>
    <VerticalDiv
      backgroundColor='transparent'
      alignItems='flex-start'
      css={`
        width: 100%;
        height: fit-content;
      `}
    >
      <HeadingText variant='h6' color='white'>
        {displayName}
      </HeadingText>
      <Margin height='6px' width='100%' />
      <CopyText size='small' color='white' fontWeight={300}>
        {blurb}
      </CopyText>
    </VerticalDiv>
    <ButtonsContainer>
      <HorizontalDiv
        backgroundColor='transparent'
        justifyContent='space-between'
        css={`
          width: 100%;
        `}
      >
        <Button
          variant='solid'
          size='small'
          backgroundColor='primary'
          hoverBackgroundColor='secondary'
          textColor='white'
          minWidth='100px'
          padding='4px 12px'
          margin='4px 0'
        >
          Profile
        </Button>
        <Button
          variant='solid'
          size='small'
          backgroundColor='primary'
          hoverBackgroundColor='secondary'
          textColor='white'
          minWidth='100px'
          padding='4px 8px'
          margin='4px 0'
        >
          Message
        </Button>
      </HorizontalDiv>
    </ButtonsContainer>
  </ProfileCardContainer>
);

export default ProfileCard;
