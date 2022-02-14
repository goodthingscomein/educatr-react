import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import utils
import secondsToTimeFormat from '../../utils/secondsToTimeFormat';

// Import Connect Redux
import { connect } from 'react-redux';
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { setIsShowingMiniplayer, setIsShowingPlaybackBar } from '../../redux/miniplayer-view/miniplayer-view.actions';
import { setDownloadUrl, setBlobUrl } from '../../redux/video-stream/video-stream.actions';
import {
  setGlobalIsPlaying,
  setGlobalCurrentTimeMilliseconds,
} from '../../redux/video-playback/video-playback.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  MiniplayerButtonsContainer,
  MiniplayerInteractionContainer,
  MiniplayerInteractionItemsRowContainer,
  MiniplayerMiddleButtonsContainer,
  MiniplayerSliderContainer,
  MiniplayerTimeSlider,
} from './miniplayer-overlay.styles';

// Import custom components
import Icon from '../icon/icon-components';
import Margin from '../margin/margin.components';
import CopyText from '../copy-text/copy-text.components';
import Button from '../button/button.components';

// Import custom icons
import CloseIcon from '@mui/icons-material/Close';
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipForwardIcon from '@mui/icons-material/FastForward';
import SkipBackIcon from '@mui/icons-material/FastRewind';
import BackToVideoIcon from '@mui/icons-material/ScreenShareOutlined';
import FullscreenIcon from '@mui/icons-material/FitScreenOutlined';
import PipIcon from '@mui/icons-material/PictureInPicture';
import HideMiniplayerIcon from '@mui/icons-material/KeyboardArrowDown';

// Component Props Interface
type Props = {
  // Video metadata
  videoId: string;
  videoTitle: string;
  videoLengthSeconds: number;

  // Video playback
  globalIsPlaying: boolean;
  globalCurrentTimeMilliseconds: number;
  setGlobalIsPlaying: typeof setGlobalIsPlaying;
  setGlobalCurrentTimeMilliseconds: typeof setGlobalCurrentTimeMilliseconds;

  // Set the URL of the recording drawer button
  setRecordingsNavigationUrl: typeof setRecordingsNavigationUrl;

  // Set is showing miniplayer / playbar
  setIsShowingMiniplayer: typeof setIsShowingMiniplayer;
  setIsShowingPlaybackBar: typeof setIsShowingPlaybackBar;

  // Video stream
  setDownloadUrl: typeof setDownloadUrl;
  setBlobUrl: typeof setBlobUrl;
};

// Render Component
const MiniplayerOverlay: React.FC<Props> = ({
  // Video metadata
  videoId,
  videoTitle,
  videoLengthSeconds,

  // Playback state
  globalIsPlaying,
  globalCurrentTimeMilliseconds,

  // Records drawer button url action
  setRecordingsNavigationUrl,

  // Display playback bar / miniplayer actions
  setIsShowingMiniplayer,
  setIsShowingPlaybackBar,

  // Video link actions
  setDownloadUrl,
  setBlobUrl,

  // Playback actions
  setGlobalIsPlaying,
  setGlobalCurrentTimeMilliseconds,
}) => {
  const navigate = useNavigate();
  const recordingDetailsUrl = `/recordings/${videoId}/discussion`;

  const navigateToVideoUrl = () => {
    setRecordingsNavigationUrl(recordingDetailsUrl);
    navigate(recordingDetailsUrl);
  };

  // Close button
  const closePlaybackBarMiniplayer = () => {
    // Set is showing playback bar and miniplayer to true for when it is next opened
    setIsShowingPlaybackBar(false);
    setIsShowingMiniplayer(true);
    // Turn off the
    setDownloadUrl('');
    setBlobUrl('');
  };

  // Drag time slider
  const dragTimeSlide: React.FormEventHandler<HTMLInputElement> = (event) => {
    // if (!isDraggingTime) setIsDraggingTime(true);
    // setCurrentTimeMilliseconds(parseInt(event.currentTarget.value));
  };

  return (
    <MiniplayerInteractionContainer>
      {/* TOP BUTTONS */}
      <MiniplayerInteractionItemsRowContainer>
        {/* TOP LEFT BUTTONS */}
        <MiniplayerButtonsContainer>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            margin='0 12px 0 0'
          >
            <Icon padding='12px'>
              <FullscreenIcon fontSize='medium' />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            margin='0 12px 0 0'
          >
            <Icon padding='12px'>
              <PipIcon />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            clickAction={() => navigateToVideoUrl()}
          >
            {videoTitle.substring(0, 30)}
            {videoTitle.length >= 30 && '...'}
          </Button>
        </MiniplayerButtonsContainer>
        {/* TOP RIGHT BUTTONS */}
        <MiniplayerButtonsContainer>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            clickAction={() => setIsShowingMiniplayer(false)}
          >
            <Icon padding='12px'>
              <HideMiniplayerIcon />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            margin='0 0 0 12px'
            clickAction={() => closePlaybackBarMiniplayer()}
          >
            <Icon padding='12px'>
              <CloseIcon />
            </Icon>
          </Button>
        </MiniplayerButtonsContainer>
      </MiniplayerInteractionItemsRowContainer>
      {/* MIDDLE BUTTONS */}
      <MiniplayerInteractionItemsRowContainer>
        <MiniplayerMiddleButtonsContainer>
          <Button
            variant='text'
            size='x-small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            // clickAction={() => rewindTime(15)}
          >
            <Icon>
              <SkipBackIcon fontSize='inherit' />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='x-large'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            margin='0 80px'
            // clickAction={() => setIsPlaying(!isPlaying)}
          >
            {/* <Icon>{isPlaying ? <PauseIcon fontSize='inherit' /> : <PlayIcon fontSize='inherit' />}</Icon> */}
            <Icon>
              <PlayIcon fontSize='inherit' />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='x-small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            // clickAction={() => fastforwardTime(15)}
          >
            <Icon>
              <SkipForwardIcon fontSize='inherit' />
            </Icon>
          </Button>
        </MiniplayerMiddleButtonsContainer>
      </MiniplayerInteractionItemsRowContainer>
      <MiniplayerInteractionItemsRowContainer>
        <MiniplayerSliderContainer>
          <CopyText size='x-small' color='white'>
            {secondsToTimeFormat(Math.floor(globalCurrentTimeMilliseconds / 1000))} /{' '}
            {secondsToTimeFormat(Math.floor(videoLengthSeconds))}
          </CopyText>
          <Margin height='4px' />
          <MiniplayerTimeSlider
            type='range'
            min={0}
            max={Math.floor(videoLengthSeconds * 1000)}
            value={globalCurrentTimeMilliseconds}
            onInput={(e) => dragTimeSlide(e)}
            // onClick={() => setIsDraggingTime(false)}
          />
        </MiniplayerSliderContainer>
      </MiniplayerInteractionItemsRowContainer>
    </MiniplayerInteractionContainer>
  );
};

const mapStateToProps = (state: State) => ({
  // Video metadata
  videoId: state.videoMetadata.videoId,
  videoTitle: state.videoMetadata.videoTitle,
  videoLengthSeconds: state.videoMetadata.videoLengthSeconds,
  // Video playback
  globalIsPlaying: state.videoPlayback.globalIsPlaying,
  globalCurrentTimeMilliseconds: state.videoPlayback.globalCurrentTimeMilliseconds,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Recording drawer button url
  setRecordingsNavigationUrl: (url: string) => dispatch(setRecordingsNavigationUrl(url)),
  // Miniplayer view
  setIsShowingPlaybackBar: (isShowing: boolean) => dispatch(setIsShowingPlaybackBar(isShowing)),
  setIsShowingMiniplayer: (isShowing: boolean) => dispatch(setIsShowingMiniplayer(isShowing)),
  // Video stream
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
  // Video playback
  setGlobalIsPlaying: (isPlaying: boolean) => dispatch(setGlobalIsPlaying(isPlaying)),
  setGlobalCurrentTimeMilliseconds: (ms: number) => dispatch(setGlobalCurrentTimeMilliseconds(ms)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniplayerOverlay);
