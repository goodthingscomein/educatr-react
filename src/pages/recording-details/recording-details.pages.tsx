import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation, useParams } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { setDownloadUrl } from '../../redux/recording/recording.actions';
import { State } from '../../redux/root-reducer';
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
  HashtagsContainer,
  OverviewContentContainer,
  OverviewUnderHeadingContainer,
  RatingButtonsContainer,
} from './recording-details.styles';

// Import custom components
import CopyText from '../../components/copy-text/copy-text.components';
import Link from '../../components/link/link.components';
import Button from '../../components/button/button.components';
import Icon from '../../components/icon/icon-components';
import Margin from '../../components/margin/margin.components';
import Divider from '../../components/divider/divider.components';
import MainVideo from '../../components/main-video/main-video.components';

// Import custom icons
import LeftArrowIcon from '@mui/icons-material/ArrowBackIosNew';
import FavouriteSolidIcon from '@mui/icons-material/Star';
import FavouriteOutlineIcon from '@mui/icons-material/StarBorder';
import HelpIcon from '@mui/icons-material/HelpOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOutlineIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpSolidIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlineIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownSolidIcon from '@mui/icons-material/ThumbDown';
import TimestampIcon from '@mui/icons-material/MoreTime';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizontalIcon from '@mui/icons-material/MoreHoriz';

// Import sub pages
import DiscussionSubPage from './sub-pages/discussion/discussion.pages';
import ResourcesSubPage from './sub-pages/resources/resources.pages';
import NotesSubPage from './sub-pages/notes/notes.pages';
import PracticeSubPage from './sub-pages/practice/practice.pages';
import NotFoundPage from '../not-found/not-found.pages';

type VideoRatingType = 'likes' | 'dislikes' | undefined;

type Props = {
  // Drawer button nav url management
  setRecordingsNavigationUrl: typeof setRecordingsNavigationUrl;

  // Recording details from redux state
  videoId: string;
  videoThumbnailSrc: string;
  videoTitle: string;
  videoDescription: string;
  videoHashtags?: string[];
  isFavourited?: boolean;
  alreadyRated?: VideoRatingType;

  // Recording download redux state
  videoBlobUrl: string;
  setDownloadUrl: typeof setDownloadUrl;
};

// Render Component
const RecordingDetailsPage: React.FC<Props> = ({
  setRecordingsNavigationUrl,
  videoId,
  videoThumbnailSrc,
  videoTitle,
  videoDescription,
  videoHashtags,
  isFavourited,
  alreadyRated,
  videoBlobUrl,
  setDownloadUrl,
}) => {
  const [showingFullDescription, setShowingFullDescription] = useState(false);
  const [isFavourite, setIsFavourite] = useState(isFavourited || false);
  const [videoRating, setVideoRating] = useState<VideoRatingType>(alreadyRated);

  // Adding timestamp functionality + short note input
  const [isAddingTimestamp, setIsAddingTimestamp] = useState(false);
  const [timestampNoteInput, setTimestampNoteInput] = useState('');

  const navigate = useNavigate();
  const { recordingId } = useParams();
  const recordingURL = `http://localhost:4001/api/v1/vods/recordings/${recordingId}`;

  const recordingsNavigation = (url: string) => {
    navigate(url);
    setRecordingsNavigationUrl(url);
  };

  // Set the download link when we open the page
  useEffect(() => {
    setDownloadUrl(recordingURL);
  }, []);

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
                <Icon padding='10px' margin='0 8px 0 0'>
                  <LeftArrowIcon fontSize='small' />
                </Icon>
                Back
              </Button>
            </BackButtonContainer>
            <CopyText size='medium' color='white' fontWeight={300}>
              <i>{videoTitle}</i>
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
              {isFavourite ? <FavouriteSolidIcon fontSize='small' /> : <FavouriteOutlineIcon fontSize='small' />}
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
              <MoreVertIcon fontSize='small' />
            </Button>
          </AppBarSectionContainer>
        </AppBarContainer>
        {/* VIDEO GOES HERE */}
        <MainVideo />
        <AllContentContainer>
          <OverviewContentContainer>
            {/* Overview of video */}
            {videoHashtags && (
              <HashtagsContainer>
                {videoHashtags.map((hashtag) => {
                  return (
                    <Link key={hashtag} color='primary' fontSize='small' margin='0 4px 0 0'>
                      #{hashtag}
                    </Link>
                  );
                })}
              </HashtagsContainer>
            )}
            <CopyText size='large' color='textDark' fontWeight={600}>
              {videoTitle}
            </CopyText>
            <Margin height='12px' />
            <OverviewUnderHeadingContainer>
              <CopyText size='medium' color='textLight' fontWeight={300}>
                27/01/2022
              </CopyText>
              <RatingButtonsContainer>
                <Button
                  variant='text'
                  size='small'
                  textColor='textDark'
                  padding='8px'
                  margin='0 28px 0 0'
                  clickAction={() => (videoRating === 'likes' ? setVideoRating(undefined) : setVideoRating('likes'))}
                >
                  {videoRating === 'likes' ? (
                    <ThumbUpSolidIcon fontSize='medium' />
                  ) : (
                    <ThumbUpOutlineIcon fontSize='medium' />
                  )}
                </Button>
                <Button
                  variant='text'
                  size='small'
                  textColor='textDark'
                  padding='8px'
                  margin='0 28px 0 0'
                  clickAction={() =>
                    videoRating === 'dislikes' ? setVideoRating(undefined) : setVideoRating('dislikes')
                  }
                >
                  {videoRating === 'dislikes' ? (
                    <ThumbDownSolidIcon fontSize='medium' />
                  ) : (
                    <ThumbDownOutlineIcon fontSize='medium' />
                  )}
                </Button>
                <Button
                  variant='text'
                  size='small'
                  textColor='textDark'
                  hoverTextColor='secondaryAccent'
                  padding='8px'
                  margin='0 28px 0 0'
                >
                  <ShareIcon fontSize='medium' />
                </Button>
                {}
                <Button
                  variant='text'
                  size='small'
                  textColor='textDark'
                  hoverTextColor='secondaryAccent'
                  padding='8px'
                  margin='0 28px 0 0'
                >
                  <TimestampIcon fontSize='medium' />
                </Button>
                <Button variant='text' size='small' textColor='textDark' hoverTextColor='secondaryAccent' padding='8px'>
                  <MoreHorizontalIcon fontSize='medium' />
                </Button>
              </RatingButtonsContainer>
            </OverviewUnderHeadingContainer>
            <Divider color='dark' margin='16px 0 28px' />
            <CopyText size='medium' color='textLight' fontWeight={300}>
              {showingFullDescription ? videoDescription : videoDescription.substring(0, 200)}
            </CopyText>
            {videoDescription.length >= 200 && <Margin height='8px' />}
            {videoDescription.length >= 200 && !showingFullDescription && (
              <Link
                color='textDark'
                fontSize='small'
                fontWeight={600}
                clickAction={() => setShowingFullDescription(true)}
              >
                Show more
              </Link>
            )}
            {videoDescription.length >= 200 && showingFullDescription && (
              <Link
                color='textDark'
                fontSize='small'
                fontWeight={600}
                clickAction={() => setShowingFullDescription(false)}
              >
                Show less
              </Link>
            )}
          </OverviewContentContainer>
          <ContentSelectionBar>
            <Link
              fontSize='large'
              fontWeight={400}
              color={
                useLocation().pathname.match(/^\/recordings\/[A-Za-z0-9]*\/discussion$/g)
                  ? 'tertiaryAccent'
                  : 'textDark'
              }
              hoverColor='tertiaryAccent'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => recordingsNavigation(`/recordings/${recordingId}/discussion`)}
            >
              Discussion
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
          <Margin height='24px' />
          <SubContentContainer>
            {/* Sub route for video */}
            <Routes>
              <Route path='/' element={<Navigate to={`/recordings/${recordingId}/discussion`} />} />
              <Route path='/discussion' element={<DiscussionSubPage />} />
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

const mapStateToProps = (state: State) => ({
  // Recording metadata
  videoId: state.recording.videoId,
  videoThumbnailSrc: state.recording.videoThumbnailSrc,
  videoTitle: state.recording.videoTitle,
  videoDescription: state.recording.videoDescription,
  hashtvideoHashtagsags: state.recording.videoHashtags,

  // Recording blob data
  videoBlobUrl: state.recording.videoBlobUrl,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setRecordingsNavigationUrl: (newUrl: string) => dispatch(setRecordingsNavigationUrl(newUrl)),
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordingDetailsPage);
