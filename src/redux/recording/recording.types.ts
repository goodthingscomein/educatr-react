import { RECORDING_TYPES } from './recording.enum';

// Recording Type
export type RecordingMetadataType = {
  recordingSrc: string;
  thumbnailSrc: string;
  title: string;
  description: string;
  length: number;
  hashtags?: string[];
};

// Action types
interface SetRecordingMetadataAction {
  type: RECORDING_TYPES.SET_CURRENT_RECORDING_METADATA;
  payload: RecordingMetadataType;
}

export type RecordingAction = SetRecordingMetadataAction;
