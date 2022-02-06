import { RECORDING_TYPES } from './recording.enum';
import { RecordingAction } from './recording.types';

interface RecordingState {
  // Video meta data
  id: string;
  thumbnailSrc: string;
  title: string;
  description: string;
  length: number;
  date: string;
  alreadyWatched?: boolean;
  hashtags?: string[];

  // Video stream data
  downloadUrl: string;
  blobUrl: string;

  // Video playback data
  isPlaying: boolean;
  currentTimeSeconds: number;
  isInFullScreen: boolean;
  isInPip: boolean;
}

const INITIAL_STATE = {
  // Video meta data
  id: '',
  thumbnailSrc: '',
  title: '',
  description: '',
  length: 0,
  date: '',

  // Video stream data
  downloadUrl: '',
  blobUrl: '',

  // Video playback
  isPlaying: false,
  currentTimeSeconds: 0,
  isInFullScreen: false,
  isInPip: false,
} as RecordingState;

const recordingReducer = (state: RecordingState = INITIAL_STATE, action: RecordingAction) => {
  switch (action.type) {
    case RECORDING_TYPES.SET_CURRENT_RECORDING_METADATA:
      return {
        ...state,
        ...action.payload,
      };
    case RECORDING_TYPES.SET_DOWNLOAD_URL:
      return {
        ...state,
        downloadUrl: action.payload,
      };
    case RECORDING_TYPES.SET_BLOB_URL:
      return {
        ...state,
        blobUrl: action.payload,
      };
    case RECORDING_TYPES.SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };
    case RECORDING_TYPES.SET_CURRENT_TIME_SECONDS:
      return {
        ...state,
        currentTimeSeconds: action.payload,
      };
    case RECORDING_TYPES.SET_IS_IN_FULLSCREEN:
      return {
        ...state,
        isInFullScreen: action.payload,
      };
    case RECORDING_TYPES.SET_IS_IN_PIP:
      return {
        ...state,
        isInPip: action.payload,
      };
    default:
      return state;
  }
};

export default recordingReducer;
