import * as React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setDrawerIsOpen } from '../../redux/navigation/navigation.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { AppBarContainer, AppBarItemsContainer } from './app-bar.styles';

// Import custom components
import Button from '../button/button.components';
import HeadingText from '../heading/heading.components';
import VerticalDiv from '../vertical-div/vertical-div.components';

// Import custom icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AccountIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CopyText from '../copy-text/copy-text.components';

type Props = {
  isDrawerOpen: boolean;
  setDrawerIsOpen: typeof setDrawerIsOpen;
};

const AppBar: React.FC<Props> = ({ isDrawerOpen, setDrawerIsOpen }) => {
  return (
    <AppBarContainer color='textDark' padding='0 40px 0 20px'>
      {/* LEFT SIDE */}
      <AppBarItemsContainer>
        <Button
          variant='text'
          padding='18px'
          textColor='white'
          hoverTextColor='primary'
          size='medium'
          clickAction={() => setDrawerIsOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? <MenuOpenIcon fontSize='medium' /> : <MenuIcon fontSize='medium' />}
        </Button>
        <VerticalDiv
          backgroundColor='transparent'
          css={`
            margin: 0 0 0 36px;
          `}
        >
          <HeadingText variant='h4' color='white'>
            Educatr
          </HeadingText>
        </VerticalDiv>
      </AppBarItemsContainer>
      {/* CENTRE */}
      <CopyText size='large' color='white' fontWeight={300}>
        Welcome aboard, Jai!
      </CopyText>
      {/* RIGHT SIDE*/}
      <AppBarItemsContainer>
        <Button
          variant='text'
          padding='18px'
          margin='0 16px 0 0'
          textColor='white'
          hoverTextColor='primary'
          size='medium'
        >
          <NotificationsIcon fontSize='medium' />
        </Button>
        <Button variant='text' padding='18px' textColor='white' hoverTextColor='primary' size='medium'>
          <AccountIcon fontSize='large' />
        </Button>
      </AppBarItemsContainer>
    </AppBarContainer>
  );
};

const mapStateToProps = (state: State) => ({
  isDrawerOpen: state.navigation.isDrawerOpen,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
