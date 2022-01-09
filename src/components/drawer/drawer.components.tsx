import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setDrawerIsOpen } from '../../redux/navigation/navigation.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { DrawerContainer } from './drawer.styles';

type Props = {
	children?: React.ReactNode;
	isDrawerOpen: boolean;
	setDrawerIsOpen: typeof setDrawerIsOpen;
	padding?: string;
};

const Drawer: React.FC<Props> = ({ children, isDrawerOpen, padding }) => (
	<DrawerContainer isDrawerOpen={isDrawerOpen} padding={padding}>
		{children}
	</DrawerContainer>
);

const mapStateToProps = (state: State) => ({
	isDrawerOpen: state.navigation.isDrawerOpen,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
