import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

// Import Connect Redux
import { connect } from 'react-redux';
import { CustomMapStateToProps } from '../../services/redux/root-reducer';

// Import Required Redux Actions
import { setDrawerIsOpen } from '../../services/redux/navigation/navigation.actions';

type Props = {
	isDrawerOpen: boolean;
	setDrawerIsOpen: (open: boolean) => void;
	drawerWidth: number;
	children?: JSX.Element | JSX.Element[];
};

const SideNavDrawer: React.FC<Props> = ({ isDrawerOpen, setDrawerIsOpen, drawerWidth, children }) => {
	// Toggle Drawer Function
	const toggleDrawer = (open: boolean) => (event: any) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setDrawerIsOpen(open);
	};

	// Render Side Drawer
	return (
		<Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer(false)}>
			<Box
				sx={{ width: drawerWidth }}
				role='presentation'
				onClick={toggleDrawer(false)}
				onKeyDown={toggleDrawer(false)}>
				{children}
			</Box>
		</Drawer>
	);
};

// Get props
const mapStateToProps = (state: CustomMapStateToProps) => ({
	isDrawerOpen: state.navigation.isDrawerOpen,
});

// Set props
const mapDispatchToProps = (dispatch: any) => ({
	setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavDrawer);
