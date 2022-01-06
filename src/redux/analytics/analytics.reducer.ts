import { NAVIGATION_TYPES } from './analytics.enum';
import { NavigationAction } from './analytics.types';

interface NavigationState {
	isDrawerOpen: boolean;
}

const INITIAL_STATE = {
	isDrawerOpen: false,
} as NavigationState;

const navigationReducer = (state: NavigationState = INITIAL_STATE, action: NavigationAction) => {
	switch (action.type) {
		case NAVIGATION_TYPES.SET_IS_DRAWER_OPEN:
			return {
				...state,
				isDrawerOpen: action.payload,
			};
		default:
			return state;
	}
};

export default navigationReducer;
