import { RECORDING_TYPES } from './recording.enum';
import { RecordingAction } from './recording.types';

interface RecordingState {
  // Video meta data
  id: string;
  thumbnailSrc: string;
  title: string;
  description: string;
  length: number;
  hashtags?: string[];

  // Video stream data
  downloadUrl: string;
  blobUrl: string;

  // Video playback data
  isPlaying: boolean;
  currentFrame?: number;
}

const INITIAL_STATE = {
  // Video meta data
  id: '',
  title: '',
  description: '',

  // Video stream data
  downloadUrl: '',
  blobUrl: '',

  // Video playback data
  isPlaying: false,
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
    default:
      return state;
  }
};

export default recordingReducer;
