import { RECORDING_TYPES } from './recording.enum';

// Recording Type
export type RecordingMetadataType = {
  id: string;
  thumbnailSrc: string;
  title: string;
  description: string;
  length: number;
  date: string;
  alreadyWatched?: boolean;
  hashtags?: string[];
};

// Action types
interface SetRecordingMetadataAction {
  type: RECORDING_TYPES.SET_CURRENT_RECORDING_METADATA;
  payload: RecordingMetadataType;
}

export type RecordingAction = SetRecordingMetadataAction;
