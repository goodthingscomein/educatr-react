import { NavigationAction } from './navigation/navigation.types';
import { MiniplayerViewAction } from './miniplayer-view/miniplayer-view.types';
import { CalendarAction } from './calendar/calendar.types';
import { VideoMetadataAction } from './video-metadata/video-metadata.types';
import { VideoPlaybackAction } from './video-playback/video-playback.types';
import { VideoStreamAction } from './video-stream/video-stream.types';
export type Action =
  | NavigationAction
  | MiniplayerViewAction
  | CalendarAction
  | VideoMetadataAction
  | VideoPlaybackAction
  | VideoStreamAction;
