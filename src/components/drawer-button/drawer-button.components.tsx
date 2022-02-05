import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setDrawerIsOpen } from '../../redux/navigation/navigation.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { DrawerButtonContainer } from './drawer-button.styles';

// Import custom components
import Icon from '../icon/icon-components';

// Component Props Interface
type Props = {
  // Button props
  isSelected?: boolean;
  unselectedIcon: React.ReactElement;
  selectedIcon: React.ReactElement;
  buttonText: string;
  navigationUrl: string;

  // Redux state
  isDrawerOpen: boolean;
  // Redux actions
  setDrawerIsOpen: typeof setDrawerIsOpen;
};

// Render Component
const DrawerButton: React.FC<Props> = ({
  isSelected,
  selectedIcon,
  unselectedIcon,
  buttonText,
  navigationUrl,

  // Redux
  isDrawerOpen,
  setDrawerIsOpen,
}) => {
  const navigate = useNavigate();
  // On click function for the drawer button
  const drawerButtonClick = () => {
    navigate(navigationUrl);
    if (isDrawerOpen) setDrawerIsOpen(false);
  };
  return (
    <DrawerButtonContainer isSelected={isSelected} onClick={!isSelected ? () => drawerButtonClick() : undefined}>
      <Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
        {isSelected ? selectedIcon : unselectedIcon}
      </Icon>
      {isDrawerOpen ? buttonText : ''}
    </DrawerButtonContainer>
  );
};

const mapStateToProps = (state: State) => ({
  isDrawerOpen: state.navigation.isDrawerOpen,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerButton);
