import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';

// Import styles
import { ApplicationPageContainer, ContentPaddingContainer, ContentContainer } from './platform-layout.styles';

// Import custom components
import Section from '../../components/section/section.components';
import AppBar from '../../components/app-bar/app-bar.components';
import Drawer from '../../components/drawer/drawer.components';
import DarkenScreen from '../../components/darken-screen/darken-screen.components';

// Import sub pages
import HomePage from '../home/home.pages';
import MessagesPage from '../messages/messages.pages';
import CalendarPage from '../calendar/calendar.pages';

type Props = {
  isDrawerOpen: boolean;
};

// Render Component
const ApplicationPage: React.FC<Props> = ({ isDrawerOpen }) => (
  <ApplicationPageContainer>
    <AppBar />
    <Drawer />
    <Section backgroundColor='lightGrey' padding='0' minHeight='100vh'>
      {/* MAIN CONTENT */}
      <ContentPaddingContainer>
        <ContentContainer>
          <DarkenScreen displaying={isDrawerOpen} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/messages' element={<MessagesPage />} />
          </Routes>
        </ContentContainer>
      </ContentPaddingContainer>
    </Section>
  </ApplicationPageContainer>
);

const mapStateToProps = (state: State) => ({
  isDrawerOpen: state.navigation.isDrawerOpen,
});

export default connect(mapStateToProps)(ApplicationPage);
