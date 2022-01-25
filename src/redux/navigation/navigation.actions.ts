import { NAVIGATION_TYPES } from './navigation.enum';
import { NavigationAction } from './navigation.types';

// Set side nav drawer is open state
export const setDrawerIsOpen = (open: boolean) =>
  ({
    type: NAVIGATION_TYPES.SET_IS_DRAWER_OPEN,
    payload: open,
  } as NavigationAction);
