import React, { useState } from 'react';

// Import styles
import { TopBarContainer, ButtonsContainer } from './messages-top-bar.styles';

// Import custom components
import Button from '../button/button.components';
import MessagesContact from '../messages-contact/message-contact.components';

// Import custom icons
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import OptionsIcon from '@mui/icons-material/MoreVert';
import Input from '../input/input.components';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
};

// Render Component
const MessagesTopBar: React.FC<Props> = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <TopBarContainer>
      {/* Left side */}
      <MessagesContact
        imageUrl='https://picsum.photos/80/80?random=1'
        imageHeight='40px'
        displayName='Jai Carey'
        subText='Active 25 mins ago'
      />
      {/* Right side */}
      <ButtonsContainer>
        <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='primaryAccent' size='medium'>
          <CallIcon fontSize='medium' />
        </Button>
        <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='primaryAccent' size='medium'>
          <VideoCallIcon fontSize='medium' />
        </Button>
        {isSearching ? (
          <Input placeholder='Search for messages...' value={searchValue} onChangeStateDispatch={setSearchValue} />
        ) : (
          ''
        )}

        <Button
          variant='text'
          padding='18px'
          textColor='textDark'
          hoverTextColor='primaryAccent'
          size='medium'
          clickAction={() => setIsSearching(!isSearching)}
        >
          <SearchIcon fontSize='medium' />
        </Button>
        <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='primaryAccent' size='medium'>
          <OptionsIcon fontSize='medium' />
        </Button>
      </ButtonsContainer>
    </TopBarContainer>
  );
};

export default MessagesTopBar;
