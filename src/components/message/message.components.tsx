import React from 'react';

// Import styles
import { MessageContainer, MessageTextContainer } from './message.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';

// Component Props Interface
type Props = {
  children: React.ReactNode;
  ourMessage?: boolean;
};

// Render Component
const Message: React.FC<Props> = ({ children, ourMessage }) => (
  <MessageContainer ourMessage={ourMessage}>
    <MessageTextContainer ourMessage={ourMessage}>
      <CopyText color={ourMessage ? 'white' : 'textDark'} size='medium' fontWeight={300}>
        {children}
      </CopyText>
    </MessageTextContainer>
  </MessageContainer>
);

export default Message;
