import { NavigationAction } from './navigation/navigation.types';
import { CalendarAction } from './calendar/calendar.types';
import { AuthAction } from './auth/auth.types';
export type Action = NavigationAction | CalendarAction | AuthAction;
