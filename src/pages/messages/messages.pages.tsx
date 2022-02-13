import React, { useState } from 'react';

// Import styles
import {
  PageContainer,
  DrawerContent,
  DrawerButton,
  ButtonsGroupContainer,
  ContentContainer,
  MessagesContainer,
} from './messages.styles';

// Import custom components
import Message from '../../components/message/message.components';
import MessagesBottomBar from '../../components/messages-bottom-bar/messages-bottom-bar.components';
import MessagesContact from '../../components/messages-contact/message-contact.components';
import SubPageDrawer from '../../components/sub-page-drawer/sub-page-drawer.components';
import SubPageDrawerHeader from '../../components/sub-page-drawer-header/sub-page-drawer-header.components';
import SearchBar from '../../components/search-bar/search-bar.components';
import SubPageTopBar from '../../components/sub-page-top-bar/sub-page-top-bar.components';
import OptionsButton from '../../components/options-button/options-button.components';

// Import custom icons
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Button from '../../components/button/button.components';

// Render Component
const MessagesPage: React.FC = () => {
  // Local page Sstate
  const [searchValue, setSearchValue] = useState('');

  // Render page
  return (
    <PageContainer>
      <SubPageDrawer>
        <SubPageDrawerHeader heading='Messages'>
          <SearchBar searchHint='Search all messages...' onSearchSubmitListener={(input) => console.log(input)} />
        </SubPageDrawerHeader>
        {/* MAP OF ALL OF THE CONTACTS AND MESSAGES */}
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
      </SubPageDrawer>
      <ContentContainer>
        <SubPageTopBar backgroundColor='white' hasShadow>
          {/* TOP BAR | LEFT SIDE */}
          <ButtonsGroupContainer>
            <MessagesContact
              imageUrl='https://picsum.photos/80/80?random=1'
              imageHeight='40px'
              displayName='Jai Carey'
              subText='Active 25 mins ago'
              timestamp=''
            />
          </ButtonsGroupContainer>
          {/* TOP BAR | RIGHT SIDE */}
          <ButtonsGroupContainer>
            <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='tertiaryAccent' size='medium'>
              <CallIcon fontSize='medium' />
            </Button>
            <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='tertiaryAccent' size='medium'>
              <VideoCallIcon fontSize='medium' />
            </Button>
            <SearchBar
              searchHint='Search for a message...'
              onSearchSubmitListener={(input) => console.log(input)}
              canToggle
            />
            <OptionsButton />
          </ButtonsGroupContainer>
        </SubPageTopBar>
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
        </MessagesContainer>
        <MessagesBottomBar />
      </ContentContainer>
    </PageContainer>
  );
};

export default MessagesPage;
