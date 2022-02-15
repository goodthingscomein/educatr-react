import { NAVIGATION_TYPES } from './navigation.enum';

interface SetIsDrawerOpenAction {
  type: NAVIGATION_TYPES.SET_IS_DRAWER_OPEN;
  payload: boolean;
}

interface SetYourUnitsNavigationUrlAction {
  type: NAVIGATION_TYPES.SET_YOUR_UNITS_NAVIGATION_URL;
  payload: string;
}

interface SetRecordingsNavigationUrlAction {
  type: NAVIGATION_TYPES.SET_RECORDINGS_NAVIGATION_URL;
  payload: string;
}

interface SetYourNotesNavigationUrlAction {
  type: NAVIGATION_TYPES.SET_YOUR_NOTES_NAVIGATION_URL;
  payload: string;
}

export type NavigationAction =
  | SetIsDrawerOpenAction
  | SetYourUnitsNavigationUrlAction
  | SetRecordingsNavigationUrlAction
  | SetYourNotesNavigationUrlAction;
