import React, { useState } from 'react';

// Import styles
import {
  HorizontalContainer,
  VerticalContainer,
  CommentUserDetailsContainer,
  DisplayPhotoContainer,
} from './discussion-reply-message.styles';

// Import custom components
import Margin from '../margin/margin.components';
import CircleImage from '../circle-img/circle-image.components';
import CopyText from '../copy-text/copy-text.components';

// Import types
import { DiscussionMessageType } from '../../data/discussion.data';
import Button from '../button/button.components';
import DiscussionReplyInput from '../discussion-reply-input-small/discussion-reply-input-small.components';

// Component Props Interface
type Props = {
  replyMessage: DiscussionMessageType;
};

// Render Component
const DiscussionReplyMessage: React.FC<Props> = ({ replyMessage }) => {
  // Display the reply input bar for this reply message
  const [isReplying, setIsReplying] = useState(false);
  return (
    <>
      <HorizontalContainer>
        <DisplayPhotoContainer>
          <CircleImage src={replyMessage.displayPhotoUrl} altText='Your Display Photo' />
        </DisplayPhotoContainer>
        <VerticalContainer>
          <CommentUserDetailsContainer>
            <CopyText size='small' color='textDark' fontWeight={700}>
              {replyMessage.username}
            </CopyText>
            <Margin width='8px' />
            <CopyText size='x-small' color='textDark' fontWeight={300}>
              27/05/22
            </CopyText>
          </CommentUserDetailsContainer>
          <CopyText size='small' color='textDark'>
            {replyMessage.message}
          </CopyText>
          <Margin height='4px' />
          <Button
            variant='text'
            size='small'
            textColor='textLight'
            hoverTextColor='textDark'
            padding='0'
            clickAction={() => setIsReplying(true)}
          >
            Reply
          </Button>
          <Margin height='16px' />
        </VerticalContainer>
      </HorizontalContainer>
      {/* HEAD DISCUSSION REPLY INPUT BAR */}
      {isReplying && (
        <DiscussionReplyInput
          displayPhotoSrc='https://picsum.photos/80/80?random=1'
          submitButtonName='Reply'
          cancelButtonClickAction={() => setIsReplying(false)}
          submitButtonListener={(userInput) =>
            console.log(`Replying to Message ID: ${replyMessage.replyingToId} --> (${userInput})`)
          }
        />
      )}
    </>
  );
};

export default DiscussionReplyMessage;
