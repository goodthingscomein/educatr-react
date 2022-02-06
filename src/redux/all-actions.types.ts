import { NavigationAction } from './navigation/navigation.types';
import { PlaybackMiniplayerAction } from './playback-miniplayer/playback-miniplayer.types';
import { CalendarAction } from './calendar/calendar.types';
import { RecordingAction } from './recording/recording.types';
import { AuthAction } from './auth/auth.types';
export type Action = NavigationAction | PlaybackMiniplayerAction | CalendarAction | RecordingAction | AuthAction;
