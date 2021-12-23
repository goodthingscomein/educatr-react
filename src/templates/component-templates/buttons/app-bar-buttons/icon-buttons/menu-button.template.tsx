import React from 'react';

// Import Redux
import { connect } from 'react-redux';
import { setDrawerIsOpen } from '../../../../../redux/navigation/navigation.actions';

// Import Material UI Components
import MenuIcon from '@mui/icons-material/Menu';

// Import Custom Components
import AppBarButton from '../../../../../components/app-bar-button/app-bar-button.components';
import { Dispatch } from 'redux';
import { Action } from '../../../../../redux/all-actions.types';

// Functional Component Props
type Props = {
	setDrawerIsOpen: (open: boolean) => void;
};

// Render Menu Button
// On click set to close the side nav drawer
const MenuButton: React.FC<Props> = ({ setDrawerIsOpen }) => (
	<AppBarButton size='large' edge='start' clickAction={() => setDrawerIsOpen(true)}>
		<MenuIcon />
	</AppBarButton>
);

// Dispatch Props
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
});

export default connect(null, mapDispatchToProps)(MenuButton);
