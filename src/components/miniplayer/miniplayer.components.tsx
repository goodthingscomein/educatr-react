import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { MiniplayerFrame, MiniplayerVideo } from './miniplayer.styles';

// Import custom components
import MiniplayerOverlay from '../miniplayer-overlay/miniplayer-overlay.components';

// Component Props Interface
type Props = {
  isDisplaying?: boolean;

  // Redux
  blobUrl: string;
};

// Render Component
const Miniplayer: React.FC<Props> = ({ isDisplaying, blobUrl }) => (
  <MiniplayerFrame isDisplaying={isDisplaying}>
    {/* VIDEO */}
    {blobUrl && (
      <>
        <MiniplayerVideo>
          <source src={blobUrl} type='video/mp4' />
        </MiniplayerVideo>
        {/* BUTTONS ON MINIPLAYER */}
        <MiniplayerOverlay />
      </>
    )}
  </MiniplayerFrame>
);

const mapStateToProps = (state: State) => ({
  blobUrl: state.recording.blobUrl,
});

// const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
//   // var-function: (value: type) => dispatch(importedFunction(value)),
// });

export default connect(mapStateToProps)(Miniplayer);
