import React from 'react';

// Import styles
import { ViewButtonsContainer, ViewButton } from './calendar-view-buttons.styles';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { CalendarViewTypes } from '../../redux/calendar/calendar.types';
import { setCalendarView } from '../../redux/calendar/calendar.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import
import CopyText from '../copy-text/copy-text.components';

// Component Props Interface
type Props = {
  calendarView: CalendarViewTypes;
  setCalendarView: typeof setCalendarView;
};

// Render Component
const CalendarViewButtons: React.FC<Props> = ({ calendarView, setCalendarView }) => (
  <ViewButtonsContainer>
    <ViewButton selected={calendarView === 'day'} onClick={() => setCalendarView('day')}>
      <CopyText size='small' color={calendarView === 'day' ? 'white' : 'textDark'} fontWeight={700}>
        Day
      </CopyText>
    </ViewButton>
    <ViewButton selected={calendarView === 'week'} onClick={() => setCalendarView('week')}>
      <CopyText size='small' color={calendarView === 'week' ? 'white' : 'textDark'} fontWeight={700}>
        Week
      </CopyText>
    </ViewButton>
    <ViewButton selected={calendarView === 'month'} onClick={() => setCalendarView('month')}>
      <CopyText size='small' color={calendarView === 'month' ? 'white' : 'textDark'} fontWeight={700}>
        Month
      </CopyText>
    </ViewButton>
  </ViewButtonsContainer>
);

const mapStateToProps = (state: State) => ({
  calendarView: state.calendar.calendarView,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setCalendarView: (view: CalendarViewTypes) => dispatch(setCalendarView(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarViewButtons);
