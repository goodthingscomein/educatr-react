import React, { useState } from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  BarContainer,
  BarPaddingContainer,
  HideBarButton,
  ShowBarButton,
  CloseBarButton,
  PlaybackButtonsContainer,
  MiniplayerFrame,
  MiniplayerVideo,
  MiniplayerInteractionContainer,
  MiniplayerInteractionItemsRowContainer,
  MiniplayerButtonsContainer,
  MiniplayerMiddleButtonsContainer,
  MiniplayerTimeSlider,
  MiniplayerSliderContainer,
} from './playback-bottom-bar.styles';

// Import custom components
import Button from '../button/button.components';
import Icon from '../icon/icon-components';

// Import custom icons
import ShowBarIcon from '@mui/icons-material/ArrowForwardIos';
import HideBarIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipForwardIcon from '@mui/icons-material/FastForward';
import SkipBackIcon from '@mui/icons-material/FastRewind';
import BackToVideoIcon from '@mui/icons-material/ScreenShareOutlined';
import FullscreenIcon from '@mui/icons-material/FitScreenOutlined';
import PipIcon from '@mui/icons-material/PictureInPicture';
import HideMiniplayerIcon from '@mui/icons-material/KeyboardArrowDown';
import CopyText from '../copy-text/copy-text.components';
import Margin from '../margin/margin.components';

// Component Props Interface
type Props = {
  blobUrl: string;
};

// Render Component
const PlaybackBottomBar: React.FC<Props> = ({ blobUrl }) => {
  const [isShowingBar, setIsShowingBar] = useState(false);
  const [isShowingVideo, setIsShowingVideo] = useState(true);

  // Render the playback bar
  return (
    <>
      {isShowingBar ? ( // Display the whole bar
        <BarContainer>
          <BarPaddingContainer>
            {/* LEFT SIDE HIDE BUTTON */}
            <HideBarButton onClick={() => setIsShowingBar(false)}>
              <HideBarIcon fontSize='inherit' />
            </HideBarButton>
            {/* CENTER BUTTONS TO MANAGE THE MINIPLAYER */}
            <PlaybackButtonsContainer></PlaybackButtonsContainer>
            {/* RIGHT SIDE CLOSE BUTTON */}
            <CloseBarButton>
              <CloseIcon fontSize='medium' />
            </CloseBarButton>
          </BarPaddingContainer>
        </BarContainer>
      ) : (
        // Display the show button
        <ShowBarButton onClick={() => setIsShowingBar(true)}>
          <ShowBarIcon fontSize='inherit' />
        </ShowBarButton>
      )}

      {/* VIDEO MINIPLAYER */}
      <MiniplayerFrame isDisplaying={isShowingBar && isShowingVideo}>
        {/* VIDEO */}
        {blobUrl && (
          <>
            <MiniplayerVideo>
              <source src={blobUrl} type='video/mp4' />
            </MiniplayerVideo>
            {/* BUTTONS ON MINIPLAYER */}
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
                  <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0'>
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
                  >
                    <Icon>
                      <PlayIcon fontSize='inherit' />
                    </Icon>
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
                    0:00 / 0:07
                  </CopyText>
                  <Margin height='4px' />
                  <MiniplayerTimeSlider type='range' min='1' max='4000' />
                </MiniplayerSliderContainer>
              </MiniplayerInteractionItemsRowContainer>
            </MiniplayerInteractionContainer>
          </>
        )}
      </MiniplayerFrame>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  blobUrl: state.recording.blobUrl,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // var-function: (value: type) => dispatch(importedFunction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackBottomBar);
