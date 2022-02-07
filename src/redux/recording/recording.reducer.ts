import { RECORDING_TYPES } from './recording.enum';
import { RecordingAction } from './recording.types';
import { calculateFastforwardTime, calculateRewindTime, clampVolume } from './recording.utils';

interface RecordingState {
  // Video meta data
  videoId: string;
  videoThumbnailSrc: string;
  videoTitle: string;
  videoDescription: string;
  videoLengthSeconds: number;
  videoPostDate: string;
  alreadyWatched?: boolean;
  videoHashtags?: string[];

  // Video stream data
  videoDownloadUrl: string;
  videoBlobUrl: string;

  // Video playback data
  isPlaying: boolean;
  isDraggingTime: boolean;
  isSkippingTime: boolean;
  currentTimeMilliseconds: number;
  isFullScreen: boolean;
  isPip: boolean;
  currentVolume: number;
}

const INITIAL_STATE = {
  // Video meta data
  videoId: '',
  videoThumbnailSrc: '',
  videoTitle: '',
  videoDescription: '',
  videoLengthSeconds: 0,
  videoPostDate: '',

  // Video stream data
  videoDownloadUrl: '',
  videoBlobUrl: '',

  // Video playback
  isPlaying: false,
  isDraggingTime: false,
  isSkippingTime: false,
  currentTimeMilliseconds: 0,
  isFullScreen: false,
  isPip: false,
  currentVolume: 3,
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
        videoDownloadUrl: action.payload,
      };
    case RECORDING_TYPES.SET_BLOB_URL:
      return {
        ...state,
        videoBlobUrl: action.payload,
      };
    case RECORDING_TYPES.SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };
    case RECORDING_TYPES.SET_IS_DRAGGING_TIME:
      return {
        ...state,
        isDraggingTime: action.payload,
      };
    case RECORDING_TYPES.SET_IS_SKIPPING_TIME:
      return {
        ...state,
        isSkippingTime: action.payload,
      };
    case RECORDING_TYPES.SET_CURRENT_TIME_MILLISECONDS:
      return {
        ...state,
        currentTimeMilliseconds: action.payload,
      };
    case RECORDING_TYPES.SET_IS_FULLSCREEN:
      return {
        ...state,
        isFullScreen: action.payload,
      };
    case RECORDING_TYPES.SET_IS_PIP:
      return {
        ...state,
        isPip: action.payload,
      };
    case RECORDING_TYPES.SET_VOLUME:
      return {
        ...state,
        currentVolume: clampVolume(action.payload),
      };
    case RECORDING_TYPES.FASTFORWARD_TIME:
      return {
        ...state,
        isSkippingTime: true,
        currentTimeMilliseconds: calculateFastforwardTime(
          state.currentTimeMilliseconds,
          state.videoLengthSeconds,
          action.payload
        ),
      };
    case RECORDING_TYPES.REWIND_TIME:
      return {
        ...state,
        isSkippingTime: true,
        currentTimeMilliseconds: calculateRewindTime(state.currentTimeMilliseconds, action.payload),
      };
    default:
      return state;
  }
};

export default recordingReducer;
