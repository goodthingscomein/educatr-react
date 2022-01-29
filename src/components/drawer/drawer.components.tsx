import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MainTheme } from '../../themes/main.theme';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setDrawerIsOpen } from '../../redux/navigation/navigation.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { DrawerContainer } from './drawer.styles';

// Import custom icons
// Unselected (outlined)
import HomeIcon from '@mui/icons-material/HomeOutlined';
import CalendarIcon from '@mui/icons-material/TodayOutlined';
import MessagesIcon from '@mui/icons-material/ChatOutlined';
import ResourcesIcon from '@mui/icons-material/AutoStoriesOutlined';
import RecordingsIcon from '@mui/icons-material/OndemandVideo';
import UnitsIcon from '@mui/icons-material/SchoolOutlined';
import NotesIcon from '@mui/icons-material/DescriptionOutlined';
import ClassesIcon from '@mui/icons-material/FeaturedVideoOutlined';
import GradesIcon from '@mui/icons-material/BarChartOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
// Selected (filled)
import HomeSelectedIcon from '@mui/icons-material/Home';
import CalendarSelectedIcon from '@mui/icons-material/Today';
import MessagesSelectedIcon from '@mui/icons-material/Chat';
import ResourcesSelectedIcon from '@mui/icons-material/AutoStories';
import RecordingsSelectedIcon from '@mui/icons-material/OndemandVideo';
import UnitsSelectedIcon from '@mui/icons-material/School';
import NotesSelectedIcon from '@mui/icons-material/Description';
import ClassesSelectedIcon from '@mui/icons-material/FeaturedVideo';
import GradesSelectedIcon from '@mui/icons-material/BarChart';
import SettingsSelectedIcon from '@mui/icons-material/Settings';

// Import custom components
import DrawerSection from '../drawer-section/drawer-section.components';
import DrawerButton from '../drawer-button/drawer-button.components';
import Icon from '../icon/icon-components';
import Divider from '../divider/divider.components';
import Link from '../link/link.components';
import { ClickAwayListener } from '@mui/base';

type Props = {
  // Drawer open close management
  isDrawerOpen: boolean;
  setDrawerIsOpen: typeof setDrawerIsOpen;

  // Drawer button nav url management
  yourUnitsNavigationUrl: string;
  recordingsNavigationUrl: string;
};

const Drawer: React.FC<Props> = ({
  isDrawerOpen,
  setDrawerIsOpen,
  yourUnitsNavigationUrl,
  recordingsNavigationUrl,
}) => {
  const navigate = useNavigate();

  const drawerButtonClick = (navigateLocation: string) => {
    navigate(navigateLocation);
    setDrawerIsOpen(false);
  };

  return (
    <ClickAwayListener
      onClickAway={() => (isDrawerOpen ? setDrawerIsOpen(false) : null)}
      mouseEvent='onMouseDown'
      touchEvent='onTouchStart'
    >
      <DrawerContainer padding={`${MainTheme.appBar.appBarHeight} 0 16px 0`} isDrawerOpen={isDrawerOpen}>
        <DrawerSection backgroundColor='transparent'>
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/$/g) ? true : false}
            clickAction={() => drawerButtonClick('/')}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/$/g) ? (
                <HomeSelectedIcon fontSize='medium' />
              ) : (
                <HomeIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Home' : ''}
          </DrawerButton>
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/calendar/g) ? true : false}
            clickAction={() => drawerButtonClick('/calendar')}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/calendar/g) ? (
                <CalendarSelectedIcon fontSize='medium' />
              ) : (
                <CalendarIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Calendar' : ''}
          </DrawerButton>
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/messages/g) ? true : false}
            clickAction={() => drawerButtonClick('/messages')}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/messages/g) ? (
                <MessagesSelectedIcon fontSize='medium' />
              ) : (
                <MessagesIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Messages' : ''}
          </DrawerButton>
          <Divider color='light' margin='0' />
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/resources/g) ? true : false}
            clickAction={() => drawerButtonClick('/resources')}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/resources/g) ? (
                <ResourcesSelectedIcon fontSize='medium' />
              ) : (
                <ResourcesIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Resources' : ''}
          </DrawerButton>
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/recordings/g) ? true : false}
            clickAction={() => drawerButtonClick(recordingsNavigationUrl)}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/recordings/g) ? (
                <RecordingsSelectedIcon fontSize='medium' />
              ) : (
                <RecordingsIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Recordings' : ''}
          </DrawerButton>
          <Divider color='light' margin='0' />
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/units/g) ? true : false}
            clickAction={() => drawerButtonClick(yourUnitsNavigationUrl)}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/units/g) ? (
                <UnitsSelectedIcon fontSize='medium' />
              ) : (
                <UnitsIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Your Units' : ''}
          </DrawerButton>
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/notes/g) ? true : false}
            clickAction={() => drawerButtonClick('/notes')}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/notes/g) ? (
                <NotesSelectedIcon fontSize='medium' />
              ) : (
                <NotesIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Your Notes' : ''}
          </DrawerButton>
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/classes/g) ? true : false}
            clickAction={() => drawerButtonClick('/classes')}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/classes/g) ? (
                <ClassesSelectedIcon fontSize='medium' />
              ) : (
                <ClassesIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Your Classes' : ''}
          </DrawerButton>
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/grades/g) ? true : false}
            clickAction={() => drawerButtonClick('/grades')}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/grades/g) ? (
                <GradesSelectedIcon fontSize='medium' />
              ) : (
                <GradesIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Your Grades' : ''}
          </DrawerButton>
          <Divider color='light' margin='0' />
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/settings/g) ? true : false}
            clickAction={() => drawerButtonClick('/settings')}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/settings/g) ? (
                <SettingsSelectedIcon fontSize='medium' />
              ) : (
                <SettingsIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Settings' : ''}
          </DrawerButton>
        </DrawerSection>
        <DrawerSection backgroundColor='transparent'>
          {isDrawerOpen ? (
            <>
              <Divider color='light' />
              <DrawerSection
                backgroundColor='transparent'
                flexDirection='column'
                alignItems='flex-start'
                padding='0 24px'
              >
                {isDrawerOpen ? (
                  <>
                    <Link color='white' hoverColor='primaryAccent' fontSize='small' fontWeight={300}>
                      Legal Center
                    </Link>
                    <Link color='white' hoverColor='primaryAccent' fontSize='small' fontWeight={300}>
                      Privacy Policy
                    </Link>
                    <Link color='white' hoverColor='primaryAccent' fontSize='small' fontWeight={300}>
                      Terms and Conditions
                    </Link>
                    <Link color='white' hoverColor='primaryAccent' fontSize='small' fontWeight={300}>
                      Contact Us
                    </Link>
                  </>
                ) : (
                  ''
                )}
              </DrawerSection>
            </>
          ) : (
            ''
          )}
        </DrawerSection>
      </DrawerContainer>
    </ClickAwayListener>
  );
};

const mapStateToProps = (state: State) => ({
  isDrawerOpen: state.navigation.isDrawerOpen,
  yourUnitsNavigationUrl: state.navigation.yourUnitsNavigationUrl,
  recordingsNavigationUrl: state.navigation.recordingsNavigationUrl,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
