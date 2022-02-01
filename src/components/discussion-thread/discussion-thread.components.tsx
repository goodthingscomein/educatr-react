import React, { useState } from 'react';

import { AllRepliesContainer } from './discussion-thread.styles';

// Import custom components
import Margin from '../margin/margin.components';
import DiscussionHeadMessage from '../discussion-head-message/discussion-head-message.components';

// Import types
import { DiscussionMessageType } from '../../data/discussion.data';
import DiscussionReplyMessage from '../discussion-reply-message/discussion-reply-message.components';
import DiscussionReplyInput from '../discussion-reply-input-small/discussion-reply-input-small.components';

// Component Props Interface
type Props = {
  headMessage: DiscussionMessageType;
  allReplies?: DiscussionMessageType[];
};

// Render Component
const DiscussionThread: React.FC<Props> = ({ headMessage, allReplies }) => {
  // Show replies
  const [isShowingReplies, setIsShowingReplies] = useState(false);

  // Display the reply input bar for the header message
  const [isReplying, setIsReplying] = useState(false);

  // Render component
  return (
    <>
      <DiscussionHeadMessage
        messageData={headMessage}
        hasReplies={allReplies != null && allReplies.length > 0}
        isShowingReplies={isShowingReplies}
        showRepliesClickAction={() => setIsShowingReplies(!isShowingReplies)}
        replyButtonClickAction={() => setIsReplying(true)}
      />
      <AllRepliesContainer>
        {/* HEAD DISCUSSION REPLY INPUT BAR */}
        {isReplying ? (
          <DiscussionReplyInput
            displayPhotoSrc='https://picsum.photos/80/80?random=1'
            submitButtonName='Reply'
            cancelButtonClickAction={() => setIsReplying(false)}
            submitButtonListener={(userInput) => console.log(userInput)}
          />
        ) : (
          <Margin height='8px' />
        )}
        {/* ALL REPLIES */}
        {isShowingReplies && allReplies != null && (
          <>
            {allReplies.map((reply) => {
              return <DiscussionReplyMessage replyMessage={reply} />;
            })}
            <Margin height='24px' />
          </>
        )}
      </AllRepliesContainer>
    </>
  );
};

export default DiscussionThread;
