import { RECORDING_TYPES } from './recording.enum';
import { RecordingAction } from './recording.types';

interface RecordingState {
  // Video meta data
  recordingSrc: string;
  thumbnailSrc: string;
  title: string;
  description: string;
  length: number;
  hashtags?: string[];

  // Video playback data
  isPlaying: boolean;
  currentTime?: number;
}

const INITIAL_STATE = {
  // Video meta data
  recordingSrc: '',
  title: '',
  description: '',

  // Video playback data
  isPlaying: false,
} as RecordingState;

const recordingReducer = (state: RecordingState = INITIAL_STATE, action: RecordingAction) => {
  switch (action.type) {
    case RECORDING_TYPES.SET_CURRENT_RECORDING_METADATA:
      return {
        ...state,
        recordingSrc: action.payload.recordingSrc,
        thumbnailSrc: action.payload.thumbnailSrc,
        title: action.payload.title,
        description: action.payload.description,
        length: action.payload.length,
        hashtags: action.payload.hashtags,
      };
    default:
      return state;
  }
};

export default recordingReducer;
