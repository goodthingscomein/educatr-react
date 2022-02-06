import { combineReducers } from 'redux';

import navigationReducer from './navigation/navigation.reducer';
import playbackMiniplayerReducer from './playback-miniplayer/playback-miniplayer.reducer';
import calendarReducer from './calendar/calendar.reducer';
import recordingReducer from './recording/recording.reducer';
import authReducer from './auth/auth.reducer';

const reducers = combineReducers({
  navigation: navigationReducer,
  playbackMiniplayer: playbackMiniplayerReducer,
  calendar: calendarReducer,
  recording: recordingReducer,
  auth: authReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
