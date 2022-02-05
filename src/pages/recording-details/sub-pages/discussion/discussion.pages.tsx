import React, { useState } from 'react';

// Import development data
import allDiscussionMessages from '../../../../data/discussion.data';

// Import styles
import {
  VerticalContainer,
  DiscussionSubPageContainer,
  AddNewDiscussionContainer,
  DisplayPhotoContainer,
  InputContainer,
  InputButtonsContainer,
  CancelCommentButtonsContainer,
  AllExistingDiscussionsContainer,
} from './discussion.styles';

// Import custom components
import CircleImage from '../../../../components/circle-img/circle-image.components';
import TextAreaInput from '../../../../components/text-area-input/text-area-input.components';
import Button from '../../../../components/button/button.components';
import DiscussionThread from '../../../../components/discussion-thread/discussion-thread.components';

// Import custom icons
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Margin from '../../../../components/margin/margin.components';

// Render Component
const DiscussionSubPage: React.FC = () => {
  // New discussion text area
  const [newDiscussionInput, setNewDiscussionInput] = useState('');

  return (
    <DiscussionSubPageContainer>
      <AddNewDiscussionContainer>
        <DisplayPhotoContainer>
          <CircleImage src='https://picsum.photos/80/80?random=1' altText='Your Display Photo' />
        </DisplayPhotoContainer>
        <VerticalContainer>
          <InputContainer>
            <TextAreaInput
              placeholder='Start a new discussion...'
              value={newDiscussionInput}
              onChangeStateDispatch={setNewDiscussionInput}
            />
          </InputContainer>
          <InputButtonsContainer>
            {/* Emoji Button */}
            <Button
              variant='text'
              size='medium'
              textColor='textDark'
              hoverTextColor='secondaryAccent'
              padding='8px'
              fontWeight={700}
            >
              <EmojiIcon fontSize='medium' />
            </Button>
            {/* Cancel + Comment Buttons */}
            <CancelCommentButtonsContainer>
              <Button
                variant='text'
                size='medium'
                textColor='textDark'
                hoverTextColor='textLight'
                padding='2px'
                margin='0 12px'
                fontWeight={700}
                clickAction={() => setNewDiscussionInput('')}
              >
                Cancel
              </Button>
              <Button
                variant='solid'
                size='medium'
                backgroundColor={newDiscussionInput.length > 0 ? 'secondaryAccent' : 'textLight'}
                hoverBackgroundColor={newDiscussionInput.length > 0 ? 'tertiaryAccent' : 'textLight'}
                textColor='white'
                padding='4px 12px'
                fontWeight={700}
              >
                Comment
              </Button>
            </CancelCommentButtonsContainer>
          </InputButtonsContainer>
        </VerticalContainer>
      </AddNewDiscussionContainer>
      <Margin height='36px' />
      <AllExistingDiscussionsContainer>
        {allDiscussionMessages
          .filter((headMessages) => !headMessages.replyingToId)
          .map((headMessage) => {
            return (
              <DiscussionThread
                key={headMessage.id}
                headMessage={headMessage}
                allReplies={allDiscussionMessages.filter(
                  (replyMessages) => replyMessages.replyingToId === headMessage.id
                )}
              />
            );
          })}
      </AllExistingDiscussionsContainer>
    </DiscussionSubPageContainer>
  );
};

export default DiscussionSubPage;
