import { RECORDING_TYPES } from './recording.enum';
import { RecordingAction } from './recording.types';

interface RecordingState {
  // Video meta data
  id: string;
  recordingType: string;
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
  id: '',
  recordingType: 'video/mp4',
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
        ...action.payload,
      };
    default:
      return state;
  }
};

export default recordingReducer;
