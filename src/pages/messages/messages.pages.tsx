import React, { useState } from 'react';

// Import styles
import {
  PageContainer,
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerButton,
  ContentContainer,
  MessagesContainer,
} from './messages.styles';

// Import custom components
import HeadingText from '../../components/heading-text/heading-text.components';
import Input from '../../components/input/input.components';
import Margin from '../../components/margin/margin.components';
import Message from '../../components/message/message.components';
import MessagesBottomBar from '../../components/messages-bottom-bar/messages-bottom-bar.components';
import MessagesTopBar from '../../components/messages-top-bar/messages-top-bar.components';
import MessagesContact from '../../components/messages-contact/message-contact.components';

// Render Component
const MessagesPage: React.FC = () => {
  // Local page Sstate
  const [searchValue, setSearchValue] = useState('');

  // Render page
  return (
    <PageContainer>
      <Drawer>
        <DrawerHeader>
          <HeadingText variant='h5' color='textDark'>
            Messages
          </HeadingText>
          <Margin height='18px' width='100%' />
          <Input placeholder='Search...' value={searchValue} onChangeStateDispatch={setSearchValue} hasDropShadow />
        </DrawerHeader>
        <DrawerContent>
          <DrawerButton selected>
            <MessagesContact
              imageUrl='https://picsum.photos/80/80?random=1'
              imageHeight='36px'
              displayName='Jai Carey'
              subText='Haha! Yeah that sounds right, how funny wtf!!!'
              subTextLength={25}
              timestamp='2:45pm'
            />
          </DrawerButton>
        </DrawerContent>
      </Drawer>
      <ContentContainer>
        <MessagesTopBar />
        <MessagesContainer>
          <Message>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message>test message! test message!</Message>
          <Message ourMessage>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message ourMessage>test message!</Message>
          <Message>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message>test message! test message!</Message>
          <Message ourMessage>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message ourMessage>test message!</Message>
          <Message>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message>test message! test message!</Message>
          <Message ourMessage>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message ourMessage>test message!</Message>
          <Message>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message>test message! test message!</Message>
          <Message ourMessage>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message ourMessage>test message!</Message>
          <Message>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message>test message! test message!</Message>
          <Message ourMessage>
            test message! This is a really long test messagetest message! This is a really long test messagetest
            message! This is a really long test messagetest message! This is a really long test message
          </Message>
          <Message ourMessage>test message!</Message>
        </MessagesContainer>
        <MessagesBottomBar />
      </ContentContainer>
    </PageContainer>
  );
};

export default MessagesPage;
