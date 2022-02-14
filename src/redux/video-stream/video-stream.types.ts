import { VIDEO_STREAM_TYPES } from './video-stream.enum';
import { VideoStreamState } from './video-stream.reducer';

// All Actions
interface SetDownloadUrlAction {
  type: VIDEO_STREAM_TYPES.SET_DOWNLOAD_URL;
  payload: string;
}

interface SetBlobUrlAction {
  type: VIDEO_STREAM_TYPES.SET_BLOB_URL;
  payload: string;
}

interface SetVideoStateAction {
  type: VIDEO_STREAM_TYPES.SET_VIDEO_STREAM_STATE;
  payload: VideoStreamState;
}

interface ResetVideoStateAction {
  type: VIDEO_STREAM_TYPES.RESET_VIDEO_STREAM_STATE;
}

export type VideoStreamAction = SetDownloadUrlAction | SetBlobUrlAction | SetVideoStateAction | ResetVideoStateAction;
