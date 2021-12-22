import { NavigationReducerAction } from './navigation.actions';

export interface NavigationReducerState {
	isDrawerOpen: boolean;
}

const INITIAL_STATE = {
	isDrawerOpen: false,
} as NavigationReducerState;

const navigationReducer = (state = INITIAL_STATE, action: NavigationReducerAction) => {
	switch (action.type) {
		case 'OPEN_SIDE_NAV_DRAWER':
			return {
				...state,
				isDrawerOpen: action.payload,
			};
		default:
			return state;
	}
};

export default navigationReducer;
