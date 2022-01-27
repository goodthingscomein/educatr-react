import { NAVIGATION_TYPES } from './navigation.enum';
import { NavigationAction } from './navigation.types';

// Set side nav drawer is open state
export const setDrawerIsOpen = (open: boolean) =>
  ({
    type: NAVIGATION_TYPES.SET_IS_DRAWER_OPEN,
    payload: open,
  } as NavigationAction);

// Set the nav url of the "your units" side drawer button
// Used to navigate the user back to where they were, and does not have to re-nav every time
export const setYourUnitsNavigationUrl = (newUrl: string) =>
  ({
    type: NAVIGATION_TYPES.SET_YOUR_UNITS_NAVIGATION_URL,
    payload: newUrl,
  } as NavigationAction);
