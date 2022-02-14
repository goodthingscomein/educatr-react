import { VIDEO_STREAM_TYPES } from './video-stream.enum';
import { VideoStreamAction } from './video-stream.types';

export interface VideoStreamState {
  videoDownloadUrl: string;
  videoBlobUrl: string;
}

const DEFAULT_STATE = {
  videoDownloadUrl: '',
  videoBlobUrl: '',
} as VideoStreamState;

const videoStreamReducer = (state: VideoStreamState = DEFAULT_STATE, action: VideoStreamAction): VideoStreamState => {
  switch (action.type) {
    case VIDEO_STREAM_TYPES.SET_DOWNLOAD_URL:
      return {
        ...state,
        videoDownloadUrl: action.payload,
      };
    case VIDEO_STREAM_TYPES.SET_BLOB_URL:
      return {
        ...state,
        videoBlobUrl: action.payload,
      };
    case VIDEO_STREAM_TYPES.SET_VIDEO_STREAM_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case VIDEO_STREAM_TYPES.RESET_VIDEO_STREAM_STATE:
      return {
        ...state,
        ...DEFAULT_STATE,
      };
    default:
      return state;
  }
};

export default videoStreamReducer;
