import { combineReducers } from 'redux';

import navigationReducer from './navigation/navigation.reducer';
import miniplayerViewReducer from './miniplayer-view/miniplayer-view.reducer';
import calendarReducer from './calendar/calendar.reducer';
import videoMetadataReducer from './video-metadata/video-metadata.reducer';
import videoPlaybackReducer from './video-playback/video-playback.reducer';
import videoStreamReducer from './video-stream/video-stream.reducer';

const reducers = combineReducers({
  navigation: navigationReducer,
  miniplayerView: miniplayerViewReducer,
  calendar: calendarReducer,
  videoMetadata: videoMetadataReducer,
  videoPlayback: videoPlaybackReducer,
  videoStream: videoStreamReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
