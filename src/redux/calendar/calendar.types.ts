import { CALENDAR_TYPES } from './calendar.enum';

// Data types
export type CalendarViewTypes = 'day' | 'week' | 'month';

// Action types
interface SetCalendarViewAction {
  type: CALENDAR_TYPES.SET_CALENDAR_VIEW;
  payload: CalendarViewTypes;
}

export type CalendarAction = SetCalendarViewAction;
