import { VIDEO_METADATA_TYPES } from './video-metadata.enum';
import { VideoMetadataAction } from './video-metadata.types';

export interface VideoMetadataState {
  // Video meta data
  videoId: string;
  videoThumbnailSrc: string;
  videoTitle: string;
  videoDescription: string;
  videoLengthSeconds: number;
  videoPostDate: string;
  alreadyWatched?: boolean;
  videoHashtags?: string[];
}

const DEFAULT_STATE = {
  // Video meta data
  videoId: '',
  videoThumbnailSrc: '',
  videoTitle: '',
  videoDescription: '',
  videoLengthSeconds: 0,
  videoPostDate: '',
} as VideoMetadataState;

const videoMetadataReducer = (
  state: VideoMetadataState = DEFAULT_STATE,
  action: VideoMetadataAction
): VideoMetadataState => {
  switch (action.type) {
    case VIDEO_METADATA_TYPES.SET_VIDEO_ID:
      return {
        ...state,
        videoId: action.payload,
      };
    case VIDEO_METADATA_TYPES.SET_VIDEO_THUMBNAIL_SRC:
      return {
        ...state,
        videoThumbnailSrc: action.payload,
      };
    case VIDEO_METADATA_TYPES.SET_VIDEO_TITLE:
      return {
        ...state,
        videoTitle: action.payload,
      };
    case VIDEO_METADATA_TYPES.SET_VIDEO_DESCRIPTION:
      return {
        ...state,
        videoDescription: action.payload,
      };
    case VIDEO_METADATA_TYPES.SET_VIDEO_LENGTH_SECONDS:
      return {
        ...state,
        videoLengthSeconds: action.payload,
      };
    case VIDEO_METADATA_TYPES.SET_VIDEO_POST_DATE:
      return {
        ...state,
        videoPostDate: action.payload,
      };
    case VIDEO_METADATA_TYPES.SET_VIDEO_ALREADY_WATCHED:
      return {
        ...state,
        alreadyWatched: action.payload,
      };
    case VIDEO_METADATA_TYPES.SET_VIDEO_HASHTAGS:
      return {
        ...state,
        videoHashtags: action.payload,
      };
    case VIDEO_METADATA_TYPES.SET_VIDEO_METADATA_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case VIDEO_METADATA_TYPES.RESET_VIDEO_METADATA_STATE:
      return {
        ...state,
        ...DEFAULT_STATE,
      };
    default:
      return state;
  }
};

export default videoMetadataReducer;
