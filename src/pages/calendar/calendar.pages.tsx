import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { CalendarViewTypes } from '../../redux/calendar/calendar.types';
import { State } from '../../redux/root-reducer';

// Import styles
import { PageContainer, DrawerContentContainer, ContentContainer } from './calendar.styles';

// Import custom components
import CalendarDrawerHeader from '../../components/calendar-drawer-header/calendar-drawer-header.components';
import CalendarViewCompact from '../../components/calendar-compact/calendar-compact.components';
import CalendarFilters from '../../components/calendar-filters/calendar-filters.components';
import CalendarTopBar from '../../components/calendar-top-bar/calendar-top-bar.components';
import CalendarMonthGrid from '../../components/calendar-month-grid/calendar-month-grid.components';
import CalendarWeekGrid from '../../components/calendar-week-grid/calendar-week-grid.components';
import CalendarDayGrid from '../../components/calendar-day-grid/calendar-day-grid.components';
import SubPageDrawer from '../../components/sub-page-drawer/sub-page-drawer.components';
import SubPageDrawerHeader from '../../components/sub-page-drawer-header/sub-page-drawer-header.components';
import CreateButton from '../../components/create-button/create-button.components';

// Component Props Interface
type Props = {
  calendarView: CalendarViewTypes;
};

// Render Calendar Page
const CalendarPage: React.FC<Props> = ({ calendarView }) => {
  return (
    <PageContainer>
      <SubPageDrawer>
        <SubPageDrawerHeader heading='Calendar'>
          <CreateButton />
        </SubPageDrawerHeader>
        <DrawerContentContainer>
          <CalendarViewCompact />
          <CalendarFilters />
          {/* Events coming up */}
        </DrawerContentContainer>
      </SubPageDrawer>
      <ContentContainer>
        <CalendarTopBar />
        {calendarView === 'month' && <CalendarMonthGrid />}
        {calendarView === 'week' && <CalendarWeekGrid />}
        {calendarView === 'day' && <CalendarDayGrid />}
      </ContentContainer>
    </PageContainer>
  );
};

const mapStateToProps = (state: State) => ({
  calendarView: state.calendar.calendarView,
});

export default connect(mapStateToProps)(CalendarPage);
