import React, { useState } from 'react';

// Import styles
import {
  ButtonsContainer,
  HorizontalContainer,
  InputDiscussionContainer,
  SmallerDisplayPhotoContainer,
} from './discussion-reply-input-small.styles';

// Import custom components
import Button from '../button/button.components';
import CircleImage from '../circle-img/circle-image.components';
import TextAreaInput from '../text-area-input/text-area-input.components';

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
      <HorizontalContainer>
        <SmallerDisplayPhotoContainer>
          <CircleImage src={displayPhotoSrc} altText='Your Display Photo' />
        </SmallerDisplayPhotoContainer>
        <TextAreaInput placeholder='Add a reply...' value={replyInput} onChangeStateDispatch={setReplyInput} />
      </HorizontalContainer>
      <ButtonsContainer>
        <Button
          variant='text'
          size='small'
          textColor='textDark'
          hoverTextColor='textLight'
          fontWeight={700}
          padding='2px'
          margin='0 8px'
          clickAction={() => cancelButtonClickAction()}
        >
          Cancel
        </Button>
        <Button
          variant='solid'
          size='small'
          backgroundColor={replyInput.length > 0 ? 'secondaryAccent' : 'textLight'}
          hoverBackgroundColor={replyInput.length > 0 ? 'tertiaryAccent' : 'textLight'}
          textColor='white'
          fontWeight={700}
          padding='2px 12px'
          clickAction={
            replyInput.length > 0
              ? () => {
                  submitButtonListener(replyInput);
                  setReplyInput('');
                }
              : undefined
          }
        >
          {submitButtonName}
        </Button>
      </ButtonsContainer>
    </InputDiscussionContainer>
  );
};

export default DiscussionReplyInput;
