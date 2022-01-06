import { NAVIGATION_TYPES } from './user.enum';

interface SetIsDrawerOpenAction {
	type: NAVIGATION_TYPES.SET_IS_DRAWER_OPEN;
	payload: boolean;
}

export type NavigationAction = SetIsDrawerOpenAction;
