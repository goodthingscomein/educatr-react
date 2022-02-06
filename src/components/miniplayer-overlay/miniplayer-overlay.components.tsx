import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
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
  children?: React.ReactNode;
};

// Render Component
const MiniplayerOverlay: React.FC<Props> = ({ children }) => (
  <MiniplayerInteractionContainer>
    {/* TOP BUTTONS */}
    <MiniplayerInteractionItemsRowContainer>
      {/* TOP LEFT BUTTONS */}
      <MiniplayerButtonsContainer>
        <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0' margin='0 12px 0 0'>
          <Icon padding='12px'>
            <BackToVideoIcon fontSize='medium' />
          </Icon>
        </Button>
        <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0' margin='0 12px 0 0'>
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
        <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0' margin='0 0 0 12px'>
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
        <Button variant='text' size='x-large' textColor='white' hoverTextColor='primary' padding='0' margin='0 80px'>
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
);

const mapStateToProps = (state: State) => ({
  // var-name: state.reducer.value,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // var-function: (value: type) => dispatch(importedFunction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniplayerOverlay);
