import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import utils
import secondsToTimeFormat from '../../utils/secondsToTimeFormat';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
import {
  setIsShowingMiniplayer,
  setIsShowingPlaybackBar,
} from '../../redux/playback-miniplayer/playback-miniplayer.actions';
import {
  setDownloadUrl,
  setBlobUrl,
  setIsPlaying,
  setIsDraggingTime,
  setCurrentTimeMilliseconds,
  setIsInFullscreen,
  setIsInPip,
} from '../../redux/recording/recording.actions';
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
  // Recording metadata
  id: string;
  length: number;

  // Recording playback
  isPlaying: boolean;
  isDraggingTime: boolean;
  currentTimeMilliseconds: number;
  isInFullScreen: boolean;
  isInPip: boolean;

  // Set the URL of the recording drawer button
  setRecordingsNavigationUrl: typeof setRecordingsNavigationUrl;

  // Set is showing miniplayer / playbar
  setIsShowingMiniplayer: typeof setIsShowingMiniplayer;
  setIsShowingPlaybackBar: typeof setIsShowingPlaybackBar;

  // Set download / blob url
  setDownloadUrl: typeof setDownloadUrl;
  setBlobUrl: typeof setBlobUrl;

  // Set recording playback
  setIsPlaying: typeof setIsPlaying;
  setIsDraggingTime: typeof setIsDraggingTime;
  setCurrentTimeMilliseconds: typeof setCurrentTimeMilliseconds;
  setIsInFullscreen: typeof setIsInFullscreen;
  setIsInPip: typeof setIsInPip;
};

// Render Component
const MiniplayerOverlay: React.FC<Props> = ({
  // Video metadata
  id,
  length,

  // Playback state
  isPlaying,
  isDraggingTime,
  currentTimeMilliseconds,
  isInFullScreen,
  isInPip,

  // Records drawer button url action
  setRecordingsNavigationUrl,

  // Display playback bar / miniplayer actions
  setIsShowingMiniplayer,
  setIsShowingPlaybackBar,

  // Video link actions
  setDownloadUrl,
  setBlobUrl,

  // Playback actions
  setIsPlaying,
  setIsDraggingTime,
  setCurrentTimeMilliseconds,
  setIsInFullscreen,
  setIsInPip,
}) => {
  const navigate = useNavigate();
  const recordingDetailsUrl = `/recordings/${id}/discussion`;

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
    if (!isDraggingTime) setIsDraggingTime(true);
    setCurrentTimeMilliseconds(parseInt(event.currentTarget.value));
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
            hoverTextColor='primary'
            padding='0'
            margin='0 12px 0 0'
            clickAction={() => navigateToVideoUrl()}
          >
            <Icon padding='12px'>
              <BackToVideoIcon fontSize='medium' />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='primary'
            padding='0'
            margin='0 12px 0 0'
          >
            <Icon padding='12px'>
              <FullscreenIcon fontSize='medium' />
            </Icon>
          </Button>
          <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0'>
            <Icon padding='12px'>
              <PipIcon />
            </Icon>
          </Button>
        </MiniplayerButtonsContainer>
        {/* TOP RIGHT BUTTONS */}
        <MiniplayerButtonsContainer>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='primary'
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
            hoverTextColor='primary'
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
          <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0'>
            <Icon>
              <SkipBackIcon fontSize='inherit' />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='x-large'
            textColor='white'
            hoverTextColor='primary'
            padding='0'
            margin='0 80px'
            clickAction={() => setIsPlaying(!isPlaying)}
          >
            <Icon>{isPlaying ? <PauseIcon fontSize='inherit' /> : <PlayIcon fontSize='inherit' />}</Icon>
          </Button>
          <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0'>
            <Icon>
              <SkipForwardIcon fontSize='inherit' />
            </Icon>
          </Button>
        </MiniplayerMiddleButtonsContainer>
      </MiniplayerInteractionItemsRowContainer>
      <MiniplayerInteractionItemsRowContainer>
        <MiniplayerSliderContainer>
          <CopyText size='x-small' color='white'>
            {secondsToTimeFormat(Math.floor(currentTimeMilliseconds / 1000))} /{' '}
            {secondsToTimeFormat(Math.floor(length))}
          </CopyText>
          <Margin height='4px' />
          <MiniplayerTimeSlider
            type='range'
            min={0}
            max={Math.floor(length * 1000)}
            value={currentTimeMilliseconds}
            onInput={(e) => dragTimeSlide(e)}
            onClick={() => setIsDraggingTime(false)}
          />
        </MiniplayerSliderContainer>
      </MiniplayerInteractionItemsRowContainer>
    </MiniplayerInteractionContainer>
  );
};

const mapStateToProps = (state: State) => ({
  id: state.recording.id,
  length: state.recording.length,
  isPlaying: state.recording.isPlaying,
  isDraggingTime: state.recording.isDraggingTime,
  currentTimeMilliseconds: state.recording.currentTimeMilliseconds,
  isInFullScreen: state.recording.isInFullScreen,
  isInPip: state.recording.isInPip,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Set recording drawer button url
  setRecordingsNavigationUrl: (url: string) => dispatch(setRecordingsNavigationUrl(url)),
  // Playback / miniplayer
  setIsShowingPlaybackBar: (isShowing: boolean) => dispatch(setIsShowingPlaybackBar(isShowing)),
  setIsShowingMiniplayer: (isShowing: boolean) => dispatch(setIsShowingMiniplayer(isShowing)),
  // Recording urls
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
  // Recording playback
  setIsPlaying: (isPlaying: boolean) => dispatch(setIsPlaying(isPlaying)),
  setIsDraggingTime: (isDraggingTime: boolean) => dispatch(setIsDraggingTime(isDraggingTime)),
  setCurrentTimeMilliseconds: (ms: number) => dispatch(setCurrentTimeMilliseconds(ms)),
  setIsInFullscreen: (isFullscreen: boolean) => dispatch(setIsInFullscreen(isFullscreen)),
  setIsInPip: (isPip: boolean) => dispatch(setIsInPip(isPip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniplayerOverlay);
