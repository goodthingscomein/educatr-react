import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { setDownloadUrl } from '../../redux/video-stream/video-stream.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  PageContainer,
  AppBarContainer,
  BackButtonContainer,
  AppBarSectionContainer,
  MainContainer,
  AllContentContainer,
  ContentSelectionBar,
  SubContentContainer,
  HashtagsContainer,
  OverviewContentContainer,
  OverviewUnderHeadingContainer,
  RatingButtonsContainer,
  VideoContainer,
} from './recording-details.styles';

// Import custom components
import CopyText from '../../components/copy-text/copy-text.components';
import Link from '../../components/link/link.components';
import Button from '../../components/button/button.components';
import Margin from '../../components/margin/margin.components';
import Divider from '../../components/divider/divider.components';
import Video from '../../components/video/video.components';
import BackButton from '../../components/back-button/back-button.components';

// Import custom icons
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
import TabbedNavigation, { NavigationTabType } from '../../components/tabbed-navigation/tabbed-navigation.components';
import SubPageDrawer from '../../components/sub-page-drawer/sub-page-drawer.components';
import SubPageDrawerHeader from '../../components/sub-page-drawer-header/sub-page-drawer-header.components';
import SearchBar from '../../components/search-bar/search-bar.components';

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
  videoDownloadUrl: string;
  setDownloadUrl: typeof setDownloadUrl;
};

// Render Component
const RecordingDetailsPage: React.FC<Props> = ({
  setRecordingsNavigationUrl,
  videoTitle,
  videoDescription,
  videoHashtags,
  isFavourited,
  alreadyRated,
  videoDownloadUrl,
  setDownloadUrl,
}) => {
  const [showingFullDescription, setShowingFullDescription] = useState(false);
  const [isFavourite, setIsFavourite] = useState(isFavourited || false);
  const [videoRating, setVideoRating] = useState<VideoRatingType>(alreadyRated);

  // // Adding timestamp functionality + short note input
  // const [isAddingTimestamp, setIsAddingTimestamp] = useState(false);
  // const [timestampNoteInput, setTimestampNoteInput] = useState('');

  const { recordingId } = useParams();
  const recordingURL = `http://localhost:4001/api/v1/vods/recordings/${recordingId}`;

  // Set the download link when we open the page
  useEffect(() => {
    if (videoDownloadUrl !== recordingURL) setDownloadUrl(recordingURL);
  }, []);

  // The tabbed navigation items
  const recordingDetailsNavigationTabs: NavigationTabType[] = [
    {
      label: 'Discussion',
      to: 'discussion',
      urlRegexMatch: /discussion$/g,
    },
    {
      label: 'Resources',
      to: 'resources',
      urlRegexMatch: /resources$/g,
    },
    {
      label: 'Notes',
      to: 'notes',
      urlRegexMatch: /notes$/g,
    },
    {
      label: 'Practice',
      to: 'practice',
      urlRegexMatch: /practice$/g,
    },
  ];

  // Render the page
  return (
    <PageContainer>
      {/* Left side of page */}
      <MainContainer>
        {/* App Bar */}
        <AppBarContainer>
          <AppBarSectionContainer>
            <BackButtonContainer>
              <BackButton
                backToUrl={'/recordings/recent'}
                navigationDispatch={setRecordingsNavigationUrl}
                color={'white'}
                hoverColor={'primaryAccent'}
              />
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
        <VideoContainer>
          <Video />
        </VideoContainer>
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
            <TabbedNavigation
              navigationTabs={recordingDetailsNavigationTabs}
              rootUrl={`/recordings/${recordingId}`}
              navigationDispatch={setRecordingsNavigationUrl}
            />
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
      <SubPageDrawer>
        <SubPageDrawerHeader heading='Recording Sections'>
          <SearchBar searchHint='Search sections...' onSearchSubmitListener={(input) => console.log(input)} />
        </SubPageDrawerHeader>
      </SubPageDrawer>
    </PageContainer>
  );
};

const mapStateToProps = (state: State) => ({
  // Video metadata
  videoId: state.videoMetadata.videoId,
  videoThumbnailSrc: state.videoMetadata.videoThumbnailSrc,
  videoTitle: state.videoMetadata.videoTitle,
  videoDescription: state.videoMetadata.videoDescription,
  hashtvideoHashtagsags: state.videoMetadata.videoHashtags,

  // Video stream
  videoDownloadUrl: state.videoStream.videoDownloadUrl,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setRecordingsNavigationUrl: (newUrl: string) => dispatch(setRecordingsNavigationUrl(newUrl)),
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordingDetailsPage);
