import React, { useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setBlobUrl } from '../../redux/recording/recording.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { PlatformRootPageContainer, ContentPaddingContainer, ContentContainer } from './platform-root.styles';

// Import custom components
import Section from '../../components/section/section.components';
import AppBar from '../../components/app-bar/app-bar.components';
import Drawer from '../../components/drawer/drawer.components';
import PlaybackBottomBar from '../../components/playback-bottom-bar/playback-bottom-bar.components';
import DarkenScreen from '../../components/darken-screen/darken-screen.components';

// Import sub pages
import HomePage from '../home/home.pages';
import MessagesPage from '../messages/messages.pages';
import CalendarPage from '../calendar/calendar.pages';
import AllUnitsPage from '../all-units/all-units.pages';
import UnitDetailsPage from '../unit-details/unit-details.pages';
import AllRecordingsPage from '../all-recordings/all-recordings.pages';
import RecordingDetailsPage from '../recording-details/recording-details.pages';
// 404 Page
import NotFoundPage from '../not-found/not-found.pages';

type Props = {
  isDrawerOpen: boolean;
  downloadUrl: string;
  blobUrl: string;
  setBlobUrl: typeof setBlobUrl;
};

// Render Component
const PlatformRootPage: React.FC<Props> = ({ isDrawerOpen, downloadUrl, blobUrl, setBlobUrl }) => {
  // Listens for changes in the downloadUrl link, streams using link to a blob, creates blob URL and sets the URL in redux
  useEffect(() => {
    // First check if download Url is not null (it will be null when we are not watching a video)
    if (!downloadUrl) return;
    // If we want to download this video, lets do it!
    axios({
      method: 'get',
      url: downloadUrl,
      responseType: 'blob',
    })
      .then((response) => {
        console.warn('RUNNING DOWNLOAD OF BLOB');
        const blob = response.data;
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
        console.log(url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [downloadUrl]);

  // Check if we are on the recording details page to determine if we need to render the miniplayer...
  const onRecordingDetailsPage = useLocation().pathname.match(/^\/recordings\/.+/g) != null;

  return (
    <PlatformRootPageContainer>
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
              <Route path='/units' element={<AllUnitsPage />} />
              <Route path='/units/:unitId/*' element={<UnitDetailsPage />} />
              <Route path='/recordings' element={<AllRecordingsPage />} />
              <Route path='/recordings/:recordingId/*' element={<RecordingDetailsPage />} />
              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
          </ContentContainer>
          {blobUrl && !onRecordingDetailsPage && <PlaybackBottomBar />}
        </ContentPaddingContainer>
      </Section>
    </PlatformRootPageContainer>
  );
};

const mapStateToProps = (state: State) => ({
  isDrawerOpen: state.navigation.isDrawerOpen,
  downloadUrl: state.recording.downloadUrl,
  blobUrl: state.recording.blobUrl,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlatformRootPage);
