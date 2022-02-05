import React, { useState } from 'react';

// Import styles
import {
  ButtonsContainer,
  InputButtonsContainer,
  CancelCommentButtonsContainer,
  HorizontalContainer,
  InputDiscussionContainer,
  SmallerDisplayPhotoContainer,
  VerticalContainer,
  InputContainer,
} from './discussion-reply-input-small.styles';

// Import custom components
import Button from '../button/button.components';
import CircleImage from '../circle-img/circle-image.components';
import TextAreaInput from '../text-area-input/text-area-input.components';

// Import custom icons
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAlt';

// Component Props Interface
type Props = {
  displayPhotoSrc: string;
  submitButtonName: string;
  cancelButtonClickAction: () => unknown;
  submitButtonListener: (input: string) => unknown;
};

// Render Component
const DiscussionReplyInput: React.FC<Props> = ({
  displayPhotoSrc,
  submitButtonName,
  cancelButtonClickAction,
  submitButtonListener,
}) => {
  const [replyInput, setReplyInput] = useState('');

  return (
    <InputDiscussionContainer>
      <SmallerDisplayPhotoContainer>
        <CircleImage src={displayPhotoSrc} altText='Your Display Photo' />
      </SmallerDisplayPhotoContainer>
      <VerticalContainer>
        <InputContainer>
          <TextAreaInput placeholder='Type your reply...' value={replyInput} onChangeStateDispatch={setReplyInput} />
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
              margin='0 8px'
              fontWeight={700}
              clickAction={() => cancelButtonClickAction()}
            >
              Cancel
            </Button>
            <Button
              variant='solid'
              size='medium'
              backgroundColor={replyInput.length > 0 ? 'secondaryAccent' : 'textLight'}
              hoverBackgroundColor={replyInput.length > 0 ? 'tertiaryAccent' : 'textLight'}
              textColor='white'
              padding='2px 12px'
              fontWeight={700}
              clickAction={() => submitButtonListener(replyInput)}
            >
              {submitButtonName}
            </Button>
          </CancelCommentButtonsContainer>
        </InputButtonsContainer>
      </VerticalContainer>
    </InputDiscussionContainer>
  );
};

export default DiscussionReplyInput;
