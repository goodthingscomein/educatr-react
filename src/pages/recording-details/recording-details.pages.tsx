import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation, useParams } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  PageContainer,
  AppBarContainer,
  BackButtonContainer,
  AppBarSectionContainer,
  DrawerContainer,
  MainContainer,
  VideoContainer,
  Video,
  AllContentContainer,
  ContentSelectionBar,
  SubContentContainer,
} from './recording-details.styles';

// Import custom components
import CopyText from '../../components/copy-text/copy-text.components';
import Link from '../../components/link/link.components';
import Button from '../../components/button/button.components';
import Icon from '../../components/icon/icon-components';

// Import custom icons
import LeftArrowIcon from '@mui/icons-material/ArrowBackIosNew';
import FavouriteIcon from '@mui/icons-material/Star';
import FavouriteOutlineIcon from '@mui/icons-material/StarBorder';
import HelpIcon from '@mui/icons-material/HelpOutline';
import OptionsIcon from '@mui/icons-material/MoreVert';

// Import sub pages
import OverviewSubPage from './sub-pages/overview/overview.pages';
import CommentsSubPage from './sub-pages/comments/comments.pages';
import ResourcesSubPage from './sub-pages/resources/resources.pages';
import NotesSubPage from './sub-pages/notes/notes.pages';
import PracticeSubPage from './sub-pages/practice/practice.pages';
import NotFoundPage from '../not-found/not-found.pages';

type Props = {
  // Drawer button nav url management
  setRecordingsNavigationUrl: typeof setRecordingsNavigationUrl;
};

// Render Component
const RecordingsPage: React.FC<Props> = ({ setRecordingsNavigationUrl }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const navigate = useNavigate();
  const { recordingId } = useParams();

  const recordingsNavigation = (url: string) => {
    navigate(url);
    setRecordingsNavigationUrl(url);
  };

  return (
    <PageContainer>
      {/* Left side of page */}
      <MainContainer>
        {/* App Bar */}
        <AppBarContainer>
          <AppBarSectionContainer>
            <BackButtonContainer>
              <Button
                variant='text'
                size='small'
                textColor='white'
                hoverTextColor='primaryAccent'
                padding='8px'
                margin='0 20px'
                clickAction={() => recordingsNavigation('/recordings')}
              >
                <Icon padding='10px' margin='0 8px 0 0 '>
                  <LeftArrowIcon fontSize='small' />
                </Icon>
                Back
              </Button>
            </BackButtonContainer>
            <CopyText size='medium' color='white' fontWeight={300}>
              <i>Discrete Mathematics Series 1</i>
            </CopyText>
          </AppBarSectionContainer>
          <AppBarSectionContainer>
            <Button
              variant='text'
              size='small'
              textColor='white'
              hoverTextColor='primaryAccent'
              padding='8px'
              margin='0 22px 0 0'
              clickAction={() => setIsFavourite(!isFavourite)}
            >
              {isFavourite ? <FavouriteIcon fontSize='small' /> : <FavouriteOutlineIcon fontSize='small' />}
            </Button>
            <Button
              variant='text'
              size='small'
              textColor='white'
              hoverTextColor='primaryAccent'
              padding='8px'
              margin='0 20px 0 0'
            >
              <HelpIcon fontSize='small' />
            </Button>
            <Button
              variant='text'
              size='small'
              textColor='white'
              hoverTextColor='primaryAccent'
              padding='8px'
              margin='0 20px 0 0'
            >
              <OptionsIcon fontSize='small' />
            </Button>
          </AppBarSectionContainer>
        </AppBarContainer>
        <VideoContainer>
          <Video
            controls
            preload='auto'
            src='https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4'
            poster='https://s3.eu-central-1.amazonaws.com/pipe.public.content/poster.png'
          />
        </VideoContainer>
        <AllContentContainer>
          <ContentSelectionBar>
            <Link
              fontSize='large'
              fontWeight={400}
              color={useLocation().pathname.match(/^\/recordings\/[A-Za-z0-9]*$/g) ? 'tertiaryAccent' : 'textDark'}
              hoverColor='tertiaryAccent'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => recordingsNavigation(`/recordings/${recordingId}`)}
            >
              Overview
            </Link>
            <Link
              fontSize='large'
              fontWeight={400}
              color={
                useLocation().pathname.match(/^\/recordings\/[A-Za-z0-9]*\/comments$/g) ? 'tertiaryAccent' : 'textDark'
              }
              hoverColor='tertiaryAccent'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => recordingsNavigation(`/recordings/${recordingId}/comments`)}
            >
              Comments
            </Link>
            <Link
              fontSize='large'
              fontWeight={400}
              color={
                useLocation().pathname.match(/^\/recordings\/[A-Za-z0-9]*\/resources$/g) ? 'tertiaryAccent' : 'textDark'
              }
              hoverColor='tertiaryAccent'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => recordingsNavigation(`/recordings/${recordingId}/resources`)}
            >
              Resources
            </Link>
            <Link
              fontSize='large'
              fontWeight={400}
              color={
                useLocation().pathname.match(/^\/recordings\/[A-Za-z0-9]*\/notes$/g) ? 'tertiaryAccent' : 'textDark'
              }
              hoverColor='tertiaryAccent'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => recordingsNavigation(`/recordings/${recordingId}/notes`)}
            >
              Notes
            </Link>
            <Link
              fontSize='large'
              fontWeight={400}
              color={
                useLocation().pathname.match(/^\/recordings\/[A-Za-z0-9]*\/practice$/g) ? 'tertiaryAccent' : 'textDark'
              }
              hoverColor='tertiaryAccent'
              underlineEffect='always'
              clickAction={() => recordingsNavigation(`/recordings/${recordingId}/practice`)}
            >
              Practice
            </Link>
          </ContentSelectionBar>
          <SubContentContainer>
            <Routes>
              <Route path='/' element={<OverviewSubPage />} />
              <Route path='/comments' element={<CommentsSubPage />} />
              <Route path='/resources' element={<ResourcesSubPage />} />
              <Route path='/notes' element={<NotesSubPage />} />
              <Route path='/practice' element={<PracticeSubPage />} />
              <Route path='/*' element={<NotFoundPage />} />
            </Routes>
          </SubContentContainer>
        </AllContentContainer>
      </MainContainer>
      <DrawerContainer></DrawerContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setRecordingsNavigationUrl: (newUrl: string) => dispatch(setRecordingsNavigationUrl(newUrl)),
});

export default connect(null, mapDispatchToProps)(RecordingsPage);
