import React from 'react';

// Import styles
import { PageContainer, Drawer, DrawerContent, ContentContainer } from './calendar.styles';

// Import custom components
import CalendarDrawerHeader from '../../components/calendar-drawer-header/calendar-drawer-header.components';
import CalendarViewCompact from '../../components/calendar-view-compact/calendar-view-compact.components';
import CalendarFilters from '../../components/calendar-filters/calendar-filters.components';
import CalendarTopBar from '../../components/calendar-top-bar/calendar-top-bar.components';
import CalendarMonthGrid from '../../components/calendar-month-grid/calendar-month-grid.components';

// Render Component
const CalendarPage: React.FC = () => {
  return (
    <PageContainer>
      <Drawer>
        <CalendarDrawerHeader />
        <DrawerContent>
          <CalendarViewCompact />
          <CalendarFilters />
          {/* Events coming up */}
        </DrawerContent>
      </Drawer>
      <ContentContainer>
        <CalendarTopBar />
        <CalendarMonthGrid />
      </ContentContainer>
    </PageContainer>
  );
};

export default CalendarPage;
