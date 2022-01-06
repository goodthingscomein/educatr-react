import { NAVIGATION_TYPES } from './user.enum';
import { NavigationAction } from './user.types';

// Set side nav drawer is open state
export const setDrawerIsOpen = (open: boolean) =>
	({
		type: NAVIGATION_TYPES.SET_IS_DRAWER_OPEN,
		payload: open,
	} as NavigationAction);
