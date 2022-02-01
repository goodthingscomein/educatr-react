import React from 'react';

// Import styles
import {
  CommentUserDetailsContainer,
  HeadDiscussionContainer,
  HorizontalContainer,
  SmallDisplayPhotoContainer,
  VerticalContainer,
} from './discussion-head-message.styles';

// Import custom components
import Margin from '../margin/margin.components';
import Icon from '../icon/icon-components';
import Button from '../button/button.components';
import CircleImage from '../circle-img/circle-image.components';
import CopyText from '../copy-text/copy-text.components';

// Import custom icons
import DownArrowIcon from '@mui/icons-material/ArrowDropDown';
import UpArrowIcon from '@mui/icons-material/ArrowDropUp';

// Import types
import { DiscussionMessageType } from '../../data/discussion.data';

// Component Props Interface
type Props = {
  messageData: DiscussionMessageType;
  hasReplies: boolean;
  isShowingReplies: boolean;
  showRepliesClickAction: () => unknown;
  replyButtonClickAction: () => unknown;
};

// Render Component
const DiscussionHeadMessage: React.FC<Props> = ({
  messageData,
  hasReplies,
  isShowingReplies,
  showRepliesClickAction,
  replyButtonClickAction,
}) => (
  <HeadDiscussionContainer>
    <SmallDisplayPhotoContainer>
      <CircleImage src={messageData.displayPhotoUrl} altText='Your Display Photo' />
    </SmallDisplayPhotoContainer>
    <VerticalContainer>
      <CommentUserDetailsContainer>
        <CopyText size='medium' color='textDark' fontWeight={700}>
          {messageData.username}
        </CopyText>
        <Margin width='8px' />
        <CopyText size='x-small' color='textDark' fontWeight={300}>
          27/05/22
        </CopyText>
      </CommentUserDetailsContainer>
      <CopyText size='medium' color='textDark'>
        {messageData.message}
      </CopyText>
      <Margin height='12px' />
      <HorizontalContainer>
        {hasReplies && (
          <>
            {isShowingReplies ? (
              <Button
                variant='text'
                size='small'
                textColor='secondaryAccent'
                hoverTextColor='tertiaryAccent'
                padding='0'
                clickAction={() => showRepliesClickAction()}
              >
                <Icon padding='4px' margin='0 8px 0 0'>
                  <UpArrowIcon fontSize='small' />
                </Icon>
                Hide all replies
              </Button>
            ) : (
              <Button
                variant='text'
                size='small'
                textColor='secondaryAccent'
                hoverTextColor='tertiaryAccent'
                padding='0'
                clickAction={() => showRepliesClickAction()}
              >
                <Icon padding='4px' margin='0 8px 0 0'>
                  <DownArrowIcon fontSize='small' />
                </Icon>
                View all replies
              </Button>
            )}
            <Margin width='12px' />
          </>
        )}
        <Button
          variant='text'
          size='small'
          textColor='textLight'
          hoverTextColor='textDark'
          padding='0'
          clickAction={() => replyButtonClickAction()}
        >
          Reply
        </Button>
      </HorizontalContainer>
    </VerticalContainer>
  </HeadDiscussionContainer>
);

export default DiscussionHeadMessage;
