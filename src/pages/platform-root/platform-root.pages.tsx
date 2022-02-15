import React, { useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setBlobUrl } from '../../redux/video-stream/video-stream.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { PlatformRootPageContainer, ContentPaddingContainer, ContentContainer } from './platform-root.styles';

// Import custom components
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
import NotesPage from '../notes/notes.pages';
// 404 Page
import NotFoundPage from '../not-found/not-found.pages';

type Props = {
  videoDownloadUrl: string;
  videoBlobUrl: string;
  setBlobUrl: typeof setBlobUrl;
};

// Render Component
const PlatformRootPage: React.FC<Props> = ({ videoDownloadUrl, videoBlobUrl, setBlobUrl }) => {
  // Listens for changes in the downloadUrl link, streams using link to a blob, creates blob URL and sets the URL in redux
  useEffect(() => {
    // First check if download Url is not null (it will be null when we are not watching a video)
    if (!videoDownloadUrl) return;
    // If we want to download this video, lets do it!
    axios({
      method: 'get',
      url: videoDownloadUrl,
      responseType: 'blob',
    })
      .then((response) => {
        console.warn('DOWNLOADING VIDEO AND CREATING A BLOB');
        const blob = response.data;
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
      })
      .catch((err) => {
        console.error(`ERRROR DOWNLOADING VIDEO TO CREATE A BLOB${err}`);
      });
  }, [videoDownloadUrl]);

  // Check if we are on the recording details page to determine if we need to render the miniplayer...
  const onRecordingDetailsPage =
    useLocation().pathname.match(/^\/recordings\/(?!(recent|watched|favourites|all)).+/g) != null;

  return (
    <PlatformRootPageContainer>
      <AppBar />
      <Drawer />
      {/* MAIN CONTENT */}
      <ContentPaddingContainer>
        <ContentContainer>
          <DarkenScreen />
          <Routes>
            {/* ----- HOME ----- */}
            <Route path='/' element={<HomePage />} />
            {/* ----- CALENDAR ----- */}
            <Route path='/calendar' element={<CalendarPage />} />
            {/* ----- MESSAGES ----- */}
            <Route path='/messages' element={<MessagesPage />} />
            <Route path='/units'>
              {/* ----- ALL UNITS (FILTERS) ----- */}
              {['current', 'completed', 'upcoming', 'all'].map((path) => {
                return <Route key={path} path={path} element={<AllUnitsPage />} />;
              })}
              {/* ----- UNIT DETAILS ----- */}
              <Route path=':unitId/*' element={<UnitDetailsPage />} />
            </Route>
            <Route path='/recordings'>
              {/* ----- ALL RECORDINGS (FILTERS) ----- */}
              {['recent', 'watched', 'favourites', 'all'].map((path) => {
                return <Route key={path} path={path} element={<AllRecordingsPage />} />;
              })}
              {/* ----- RECORDING DETAILS ----- */}
              <Route path='/recordings/:recordingId/*' element={<RecordingDetailsPage />} />
            </Route>
            {/* ----- NOTES PAGE ----- */}
            <Route path='/notes/*' element={<NotesPage />} />
            {/* ----- 404 (PAGE NOT FOUND) ----- */}
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </ContentContainer>
        {videoBlobUrl && !onRecordingDetailsPage && <PlaybackBottomBar />}
      </ContentPaddingContainer>
    </PlatformRootPageContainer>
  );
};

const mapStateToProps = (state: State) => ({
  videoDownloadUrl: state.videoStream.videoDownloadUrl,
  videoBlobUrl: state.videoStream.videoBlobUrl,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlatformRootPage);
