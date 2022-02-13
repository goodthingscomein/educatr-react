import React from 'react';
import { useLocation } from 'react-router-dom';
import { MainTheme } from '../../themes/main.theme';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';

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
// Selected (solid)
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
import Divider from '../divider/divider.components';
import Link from '../link/link.components';

type Props = {
  // Drawer open close management
  isDrawerOpen: boolean;

  // Drawer button nav url management
  yourUnitsNavigationUrl: string;
  recordingsNavigationUrl: string;
};

const Drawer: React.FC<Props> = ({ isDrawerOpen, yourUnitsNavigationUrl, recordingsNavigationUrl }) => {
  return (
    <DrawerContainer padding={`${MainTheme.appBar.appBarHeight} 0 16px 0`} isDrawerOpen={isDrawerOpen}>
      <DrawerSection backgroundColor='transparent'>
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/$/g) ? true : false}
          navigationUrl='/'
          selectedIcon={<HomeSolidIcon fontSize='medium' />}
          unselectedIcon={<HomeOutlinedIcon fontSize='medium' />}
          buttonText='Home'
        />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/calendar/g) ? true : false}
          navigationUrl='/calendar'
          selectedIcon={<CalendarSolidIcon fontSize='medium' />}
          unselectedIcon={<CalendarOutlinedIcon fontSize='medium' />}
          buttonText='Calendar'
        />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/messages/g) ? true : false}
          navigationUrl='/messages'
          selectedIcon={<MessagesSolidIcon fontSize='medium' />}
          unselectedIcon={<MessagesOutlinedIcon fontSize='medium' />}
          buttonText='Messages'
        />
        <Divider color='light' margin='0' />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/resources/g) ? true : false}
          navigationUrl='/resources'
          selectedIcon={<ResourcesSolidIcon fontSize='medium' />}
          unselectedIcon={<ResourcesOutlinedIcon fontSize='medium' />}
          buttonText='Resources'
        />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/recordings/g) ? true : false}
          navigationUrl={recordingsNavigationUrl}
          selectedIcon={<RecordingsSolidIcon fontSize='medium' />}
          unselectedIcon={<RecordingsOutlinedIcon fontSize='medium' />}
          buttonText='Recordings'
        />
        <Divider color='light' margin='0' />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/units/g) ? true : false}
          navigationUrl={yourUnitsNavigationUrl}
          selectedIcon={<UnitsSolidIcon fontSize='medium' />}
          unselectedIcon={<UnitsOutlinedIcon fontSize='medium' />}
          buttonText='Your Units'
        />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/notes/g) ? true : false}
          navigationUrl='/notes'
          selectedIcon={<NotesSolidIcon fontSize='medium' />}
          unselectedIcon={<NotesOutlinedIcon fontSize='medium' />}
          buttonText='Your Notes'
        />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/classes/g) ? true : false}
          navigationUrl='/classes'
          selectedIcon={<ClassesSolidIcon fontSize='medium' />}
          unselectedIcon={<ClassesOutlinedIcon fontSize='medium' />}
          buttonText='Your Classes'
        />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/assessments/g) ? true : false}
          navigationUrl='/assessments'
          selectedIcon={<AssessmentsSolidIcon fontSize='medium' />}
          unselectedIcon={<AssessmentsOutlinedIcon fontSize='medium' />}
          buttonText='Your Assessments'
        />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/grades/g) ? true : false}
          navigationUrl='/grades'
          selectedIcon={<GradesSolidIcon fontSize='medium' />}
          unselectedIcon={<GradesOutlinedIcon fontSize='medium' />}
          buttonText='Your Grades'
        />
        <Divider color='light' margin='0' />
        <DrawerButton
          isSelected={useLocation().pathname.match(/^\/settings/g) ? true : false}
          navigationUrl='/settings'
          selectedIcon={<SettingsSolidIcon fontSize='medium' />}
          unselectedIcon={<SettingsOutlinedIcon fontSize='medium' />}
          buttonText='Settings'
        />
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
  );
};

const mapStateToProps = (state: State) => ({
  isDrawerOpen: state.navigation.isDrawerOpen,
  yourUnitsNavigationUrl: state.navigation.yourUnitsNavigationUrl,
  recordingsNavigationUrl: state.navigation.recordingsNavigationUrl,
});

// const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
//   setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
// });

export default connect(mapStateToProps)(Drawer);
