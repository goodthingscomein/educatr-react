import { CALENDAR_TYPES } from './calendar.enum';
import { CalendarViewTypes, CalendarAction } from './calendar.types';

// Set the calendar view state (monthly, weekly, daily)
export const setCalendarView = (view: CalendarViewTypes) =>
  ({
    type: CALENDAR_TYPES.SET_CALENDAR_VIEW,
    payload: view,
  } as CalendarAction);
