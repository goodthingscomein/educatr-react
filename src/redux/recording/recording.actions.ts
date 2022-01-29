import { RECORDING_TYPES } from './recording.enum';
import { RecordingMetadataType, RecordingAction } from './recording.types';

// Set the current video
export const setCurrentRecordingMetadata = (recording: RecordingMetadataType) =>
  ({
    type: RECORDING_TYPES.SET_CURRENT_RECORDING_METADATA,
    payload: recording,
  } as RecordingAction);
