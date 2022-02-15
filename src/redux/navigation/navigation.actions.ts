import { NAVIGATION_TYPES } from './navigation.enum';
import { NavigationAction } from './navigation.types';

// Set side nav drawer is open state
export const setDrawerIsOpen = (open: boolean) =>
  ({
    type: NAVIGATION_TYPES.SET_IS_DRAWER_OPEN,
    payload: open,
  } as NavigationAction);

// Set the nav url of the "recordings" side drawer button
export const setRecordingsNavigationUrl = (newUrl: string) =>
  ({
    type: NAVIGATION_TYPES.SET_RECORDINGS_NAVIGATION_URL,
    payload: newUrl,
  } as NavigationAction);

// Set the nav url of the "your units" side drawer button
export const setYourUnitsNavigationUrl = (newUrl: string) =>
  ({
    type: NAVIGATION_TYPES.SET_YOUR_UNITS_NAVIGATION_URL,
    payload: newUrl,
  } as NavigationAction);

// Set the nav url of the "your notes" side drawer button
export const setYourNotesNavigationUrl = (newUrl: string) =>
  ({
    type: NAVIGATION_TYPES.SET_YOUR_NOTES_NAVIGATION_URL,
    payload: newUrl,
  } as NavigationAction);
