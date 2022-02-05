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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarOutlinedIcon from '@mui/icons-material/TodayOutlined';
import MessagesOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ResourcesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import RecordingsOutlinedIcon from '@mui/icons-material/OndemandVideo';
import UnitsOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import NotesOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ClassesOutlinedIcon from '@mui/icons-material/FeaturedVideoOutlined';
import AssessmentsOutlinedIcon from '@mui/icons-material/QuizOutlined';
import GradesOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// Selected (filled)
import HomeSolidIcon from '@mui/icons-material/Home';
import CalendarSolidIcon from '@mui/icons-material/Today';
import MessagesSolidIcon from '@mui/icons-material/Chat';
import ResourcesSolidIcon from '@mui/icons-material/AutoStories';
import RecordingsSolidIcon from '@mui/icons-material/OndemandVideo';
import UnitsSolidIcon from '@mui/icons-material/School';
import NotesSolidIcon from '@mui/icons-material/Description';
import ClassesSolidIcon from '@mui/icons-material/FeaturedVideo';
import AssessmentsSolidIcon from '@mui/icons-material/Quiz';
import GradesSolidIcon from '@mui/icons-material/Analytics';
import SettingsSolidIcon from '@mui/icons-material/Settings';

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
    if (isDrawerOpen) setDrawerIsOpen(false);
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
                <HomeSolidIcon fontSize='medium' />
              ) : (
                <HomeOutlinedIcon fontSize='medium' />
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
                <CalendarSolidIcon fontSize='medium' />
              ) : (
                <CalendarOutlinedIcon fontSize='medium' />
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
                <MessagesSolidIcon fontSize='medium' />
              ) : (
                <MessagesOutlinedIcon fontSize='medium' />
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
                <ResourcesSolidIcon fontSize='medium' />
              ) : (
                <ResourcesOutlinedIcon fontSize='medium' />
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
                <RecordingsSolidIcon fontSize='medium' />
              ) : (
                <RecordingsOutlinedIcon fontSize='medium' />
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
                <UnitsSolidIcon fontSize='medium' />
              ) : (
                <UnitsOutlinedIcon fontSize='medium' />
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
                <NotesSolidIcon fontSize='medium' />
              ) : (
                <NotesOutlinedIcon fontSize='medium' />
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
                <ClassesSolidIcon fontSize='medium' />
              ) : (
                <ClassesOutlinedIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Your Classes' : ''}
          </DrawerButton>
          <DrawerButton
            textColor='white'
            hoverTextColor='primaryAccent'
            fontWeight={300}
            selected={useLocation().pathname.match(/^\/assessments/g) ? true : false}
            clickAction={() => drawerButtonClick('/assessments')}
          >
            <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
              {useLocation().pathname.match(/^\/assessments/g) ? (
                <AssessmentsSolidIcon fontSize='medium' />
              ) : (
                <AssessmentsOutlinedIcon fontSize='medium' />
              )}
            </Icon>
            {isDrawerOpen ? 'Your Assessments' : ''}
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
                <GradesSolidIcon fontSize='medium' />
              ) : (
                <GradesOutlinedIcon fontSize='medium' />
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
                <SettingsSolidIcon fontSize='medium' />
              ) : (
                <SettingsOutlinedIcon fontSize='medium' />
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
