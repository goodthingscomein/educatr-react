import { NAVIGATION_TYPES } from './auth.enum';
import { NavigationAction } from './auth.types';

// Set side nav drawer is open state
export const setDrawerIsOpen = (open: boolean) =>
	({
		type: NAVIGATION_TYPES.SET_IS_DRAWER_OPEN,
		payload: open,
	} as NavigationAction);
