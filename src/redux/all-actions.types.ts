import { NavigationAction } from './navigation/navigation.types';
import { CalendarAction } from './calendar/calendar.types';
import { RecordingAction } from './recording/recording.types';
import { AuthAction } from './auth/auth.types';
export type Action = NavigationAction | CalendarAction | RecordingAction | AuthAction;
