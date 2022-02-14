import { VIDEO_STREAM_TYPES } from './video-stream.enum';
import { VideoStreamState } from './video-stream.reducer';
import { VideoStreamAction } from './video-stream.types';

export const setDownloadUrl = (url: string) =>
  ({
    type: VIDEO_STREAM_TYPES.SET_DOWNLOAD_URL,
    payload: url,
  } as VideoStreamAction);

export const setBlobUrl = (url: string) =>
  ({
    type: VIDEO_STREAM_TYPES.SET_BLOB_URL,
    payload: url,
  } as VideoStreamAction);

export const setVideoStreamState = (videoStream: VideoStreamState) =>
  ({
    type: VIDEO_STREAM_TYPES.SET_VIDEO_STREAM_STATE,
    payload: videoStream,
  } as VideoStreamAction);

export const resetVideoStreamState = () =>
  ({
    type: VIDEO_STREAM_TYPES.RESET_VIDEO_STREAM_STATE,
  } as VideoStreamAction);
