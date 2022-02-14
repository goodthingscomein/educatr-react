import { VIDEO_METADATA_TYPES } from './video-metadata.enum';
import { VideoMetadataState } from './video-metadata.reducer';

// All Actions
interface SetVideoIdAction {
  type: VIDEO_METADATA_TYPES.SET_VIDEO_ID;
  payload: string;
}

interface SetVideoThumbnailSrcAction {
  type: VIDEO_METADATA_TYPES.SET_VIDEO_THUMBNAIL_SRC;
  payload: string;
}

interface SetVideoTitleAction {
  type: VIDEO_METADATA_TYPES.SET_VIDEO_TITLE;
  payload: string;
}

interface SetVideoDescriptionAction {
  type: VIDEO_METADATA_TYPES.SET_VIDEO_DESCRIPTION;
  payload: string;
}

interface SetVideoLengthMsAction {
  type: VIDEO_METADATA_TYPES.SET_VIDEO_LENGTH_MS;
  payload: number;
}

interface SetVideoPostDateAction {
  type: VIDEO_METADATA_TYPES.SET_VIDEO_POST_DATE;
  payload: string;
}

interface SetVideoAlreadyWatchedAction {
  type: VIDEO_METADATA_TYPES.SET_VIDEO_ALREADY_WATCHED;
  payload: boolean;
}

interface SetVideoHashtagsAction {
  type: VIDEO_METADATA_TYPES.SET_VIDEO_HASHTAGS;
  payload: string[];
}

interface SetVideoMetadataStateAction {
  type: VIDEO_METADATA_TYPES.SET_VIDEO_METADATA_STATE;
  payload: VideoMetadataState;
}

interface ResetVideoMetadataStateAction {
  type: VIDEO_METADATA_TYPES.RESET_VIDEO_METADATA_STATE;
}

export type VideoMetadataAction =
  | SetVideoIdAction
  | SetVideoThumbnailSrcAction
  | SetVideoTitleAction
  | SetVideoDescriptionAction
  | SetVideoLengthMsAction
  | SetVideoPostDateAction
  | SetVideoAlreadyWatchedAction
  | SetVideoHashtagsAction
  | SetVideoMetadataStateAction
  | ResetVideoMetadataStateAction;
