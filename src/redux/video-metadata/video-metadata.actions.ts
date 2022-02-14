import { VIDEO_METADATA_TYPES } from './video-metadata.enum';
import { VideoMetadataState } from './video-metadata.reducer';
import { VideoMetadataAction } from './video-metadata.types';

// Set the current video
export const setVideoId = (id: string) =>
  ({
    type: VIDEO_METADATA_TYPES.SET_VIDEO_ID,
    payload: id,
  } as VideoMetadataAction);

// Set the download and blob urls
export const setVideoThumbnailSrc = (src: string) =>
  ({
    type: VIDEO_METADATA_TYPES.SET_VIDEO_THUMBNAIL_SRC,
    payload: src,
  } as VideoMetadataAction);

export const setVideoTitle = (title: string) =>
  ({
    type: VIDEO_METADATA_TYPES.SET_VIDEO_TITLE,
    payload: title,
  } as VideoMetadataAction);

// Set the video playback values
export const setVideoDescription = (description: string) =>
  ({
    type: VIDEO_METADATA_TYPES.SET_VIDEO_DESCRIPTION,
    payload: description,
  } as VideoMetadataAction);

export const setVideoLengthSeconds = (lengthSeconds: number) =>
  ({
    type: VIDEO_METADATA_TYPES.SET_VIDEO_LENGTH_SECONDS,
    payload: lengthSeconds,
  } as VideoMetadataAction);

export const setVideoPostDate = (postDate: string) =>
  ({
    type: VIDEO_METADATA_TYPES.SET_VIDEO_POST_DATE,
    payload: postDate,
  } as VideoMetadataAction);

export const setVideoAlreadyWatched = (alreadyWatched: boolean) =>
  ({
    type: VIDEO_METADATA_TYPES.SET_VIDEO_ALREADY_WATCHED,
    payload: alreadyWatched,
  } as VideoMetadataAction);

export const setVideoHashtags = (hashtags: string[]) =>
  ({
    type: VIDEO_METADATA_TYPES.SET_VIDEO_HASHTAGS,
    payload: hashtags,
  } as VideoMetadataAction);

export const setVideoMetadata = (metadataState: VideoMetadataState) =>
  ({
    type: VIDEO_METADATA_TYPES.SET_VIDEO_METADATA_STATE,
    payload: metadataState,
  } as VideoMetadataAction);

export const resetVideoMetadata = () =>
  ({
    type: VIDEO_METADATA_TYPES.RESET_VIDEO_METADATA_STATE,
  } as VideoMetadataAction);
