import { NAVIGATION_TYPES } from './navigation.enum';
import { NavigationAction } from './navigation.types';

interface NavigationState {
  isDrawerOpen: boolean;
  recordingsNavigationUrl: string;
  yourUnitsNavigationUrl: string;
  yourNotesNavigationUrl: string;
}

const DEFAULT_STATE = {
  isDrawerOpen: false,
  recordingsNavigationUrl: '/recordings/recent',
  yourUnitsNavigationUrl: '/units/current',
  yourNotesNavigationUrl: '/notes',
} as NavigationState;

const navigationReducer = (state: NavigationState = DEFAULT_STATE, action: NavigationAction): NavigationState => {
  switch (action.type) {
    case NAVIGATION_TYPES.SET_IS_DRAWER_OPEN:
      return {
        ...state,
        isDrawerOpen: action.payload,
      };
    case NAVIGATION_TYPES.SET_RECORDINGS_NAVIGATION_URL:
      return {
        ...state,
        recordingsNavigationUrl: action.payload,
      };
    case NAVIGATION_TYPES.SET_YOUR_UNITS_NAVIGATION_URL:
      return {
        ...state,
        yourUnitsNavigationUrl: action.payload,
      };
    case NAVIGATION_TYPES.SET_YOUR_NOTES_NAVIGATION_URL:
      return {
        ...state,
        yourNotesNavigationUrl: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
