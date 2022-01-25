import { CALENDAR_TYPES } from './calendar.enum';
import { CalendarViewTypes, CalendarAction } from './calendar.types';

interface CalendarState {
  calendarView: CalendarViewTypes;
}

const INITIAL_STATE = {
  calendarView: 'day',
} as CalendarState;

const calendarReducer = (state: CalendarState = INITIAL_STATE, action: CalendarAction) => {
  switch (action.type) {
    case CALENDAR_TYPES.SET_CALENDAR_VIEW:
      return {
        ...state,
        calendarView: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;
