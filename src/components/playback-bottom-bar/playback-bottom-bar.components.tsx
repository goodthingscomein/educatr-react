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
} from './playback-bottom-bar.styles';

// Import custom components
import Miniplayer from '../miniplayer/miniplayer.components';

// Import custom icons
import ShowBarIcon from '@mui/icons-material/ArrowForwardIos';
import HideBarIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';

// Component Props Interface
type Props = {
  blobUrl: string;
};

// Render Component
const PlaybackBottomBar: React.FC<Props> = ({ blobUrl }) => {
  const [isShowingBar, setIsShowingBar] = useState(true);
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
      <Miniplayer isDisplaying={isShowingBar && isShowingVideo} />
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
