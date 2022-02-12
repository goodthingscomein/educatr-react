import { NAVIGATION_TYPES } from './navigation.enum';
import { NavigationAction } from './navigation.types';

interface NavigationState {
  isDrawerOpen: boolean;
  recordingsNavigationUrl: string;
  yourUnitsNavigationUrl: string;
}

const INITIAL_STATE = {
  isDrawerOpen: false,
  recordingsNavigationUrl: '/recordings/recent',
  yourUnitsNavigationUrl: '/units/current',
} as NavigationState;

const navigationReducer = (state: NavigationState = INITIAL_STATE, action: NavigationAction) => {
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
    default:
      return state;
  }
};

export default navigationReducer;
