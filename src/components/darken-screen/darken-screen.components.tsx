import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';
import { State } from '../../redux/root-reducer';

// Import styles
import { DarkenScreenContainer } from './darken-screen.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  isDrawerOpen: boolean;
};

// Render Component
const DarkenScreen: React.FC<Props> = ({ children, isDrawerOpen }) => (
  <DarkenScreenContainer displaying={isDrawerOpen}>{children}</DarkenScreenContainer>
);

const mapStateToProps = (state: State) => ({
  isDrawerOpen: state.navigation.isDrawerOpen,
});

export default connect(mapStateToProps)(DarkenScreen);
