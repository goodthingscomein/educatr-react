import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setDrawerIsOpen } from '../../redux/navigation/navigation.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

type Props = {
	isDrawerOpen: boolean;
	setDrawerIsOpen: (open: boolean) => void;
	drawerWidth: number;
	children?: JSX.Element | JSX.Element[];
};

const SideNavDrawer: React.FC<Props> = ({ isDrawerOpen, setDrawerIsOpen, drawerWidth, children }) => (
	<Drawer anchor='left' open={isDrawerOpen} onClose={() => setDrawerIsOpen(false)}>
		<Box
			sx={{ width: drawerWidth }}
			role='presentation'
			onClick={() => setDrawerIsOpen(false)}
			onKeyDown={() => setDrawerIsOpen(false)}>
			{children}
		</Box>
	</Drawer>
);

const mapStateToProps = (state: State) => ({
	isDrawerOpen: state.navigation.isDrawerOpen,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavDrawer);
