import React from 'react';

// Import styles
import { PageContainer, Drawer, DrawerContent, ContentContainer, CalendarContainer } from './calendar.styles';

// Import custom components
import CalendarDrawerHeader from '../../components/calendar-drawer-header/calendar-drawer-header.components';
import CalendarViewCompact from '../../components/calendar-view-compact/calendar-view-compact.components';
import CalendarFilters from '../../components/calendar-filters/calendar-filters.components';
import CalendarTopBar from '../../components/calendar-top-bar/calendar-top-bar.components';

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
        <CalendarContainer>
          {/* Calendar grid */}
          <>
            {/* Row 1 has days */}
            {/* 7 Columns */}
            {/* 6 Rows */}
          </>
        </CalendarContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default CalendarPage;
