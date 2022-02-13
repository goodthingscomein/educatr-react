import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { CalendarViewTypes } from '../../redux/calendar/calendar.types';
import { State } from '../../redux/root-reducer';

// Import styles
import { PageContainer, DrawerContentContainer, ButtonsGroupContainer, ContentContainer } from './calendar.styles';

// Import custom components
import SubPageDrawer from '../../components/sub-page-drawer/sub-page-drawer.components';
import SubPageDrawerHeader from '../../components/sub-page-drawer-header/sub-page-drawer-header.components';
import CreateButton from '../../components/create-button/create-button.components';
import SubPageTopBar from '../../components/sub-page-top-bar/sub-page-top-bar.components';
import Button from '../../components/button/button.components';
import CopyText from '../../components/copy-text/copy-text.components';
import CalendarViewButtons from '../../components/calendar-view-buttons/calendar-view-buttons.components';
import CalendarViewCompact from '../../components/calendar-compact/calendar-compact.components';
import CalendarFilters from '../../components/calendar-filters/calendar-filters.components';
import CalendarTopBar from '../../components/calendar-top-bar/calendar-top-bar.components';
import CalendarMonthGrid from '../../components/calendar-month-grid/calendar-month-grid.components';
import CalendarWeekGrid from '../../components/calendar-week-grid/calendar-week-grid.components';
import CalendarDayGrid from '../../components/calendar-day-grid/calendar-day-grid.components';

// Import custom icons
import LeftArrowIcon from '@mui/icons-material/ArrowBackIosNew';
import RightArrowIcon from '@mui/icons-material/ArrowForwardIos';
import SearchBar from '../../components/search-bar/search-bar.components';
import OptionsButton from '../../components/options-button/options-button.components';

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
        <SubPageTopBar backgroundColor={'primary'}>
          {/* TOP BAR | LEFT SIDE */}
          <ButtonsGroupContainer>
            <Button
              variant='solid'
              size='medium'
              backgroundColor='white'
              textColor='textDark'
              hoverTextColor='secondary'
              padding='4px 16px'
              fontWeight={600}
            >
              Today
            </Button>
            <Button
              variant='text'
              size='small'
              textColor='white'
              hoverTextColor='primaryAccent'
              padding='0'
              margin='0 36px'
            >
              <LeftArrowIcon fontSize='small' />
            </Button>
            <CopyText size='medium' color='white'>
              January 2022
            </CopyText>
            <Button
              variant='text'
              size='small'
              textColor='white'
              hoverTextColor='primaryAccent'
              padding='0'
              margin='0 36px'
            >
              <RightArrowIcon fontSize='small' />
            </Button>
          </ButtonsGroupContainer>
          {/* TOP BAR | RIGHT SIDE */}
          <ButtonsGroupContainer>
            <CalendarViewButtons />
            <SearchBar
              searchHint={'Search in calendar...'}
              onSearchSubmitListener={(input) => console.log(input)}
              canToggle
              hasLightTheme
            />
            <OptionsButton hasLightTheme />
          </ButtonsGroupContainer>
        </SubPageTopBar>
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
