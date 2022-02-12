import React from 'react';

// Import styles
import { HeaderContainer } from './all-units-header.styles';

// Import custom components
import Button from '../button/button.components';
import HeadingText from '../heading-text/heading-text.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';
import SearchBar from '../search-bar/search-bar.components';
import TabbedNavigation, { NavigationTab } from '../tabbed-navigation/tabbed-navigation.components';

// Import custom icons
import OptionsIcon from '@mui/icons-material/MoreVert';

// Component props
type Props = {
  flag?: boolean;
};

// Render Component
const AllUnitsHeader: React.FC<Props> = () => {
  // The tabbed navigation items
  const allUnitsNavigationTabs: NavigationTab[] = [
    {
      label: 'Current Units',
      to: 'current',
      urlRegexMatch: /current$/g,
    },
    {
      label: 'Completed Units',
      to: 'completed',
      urlRegexMatch: /completed$/g,
    },
    {
      label: 'Upcoming Units',
      to: 'upcoming',
      urlRegexMatch: /upcoming$/g,
    },
    {
      label: 'All Units',
      to: 'all',
      urlRegexMatch: /all$/g,
    },
  ];

  // Render component
  return (
    <HeaderContainer>
      <HorizontalDiv
        backgroundColor='transparent'
        justifyContent='space-between'
        alignItems='flex-end'
        css={`
          width: 100%;
          height: fit-content;
        `}
      >
        <TabbedNavigation navigationTabs={allUnitsNavigationTabs} />
        <HorizontalDiv
          backgroundColor='transparent'
          css={`
            width: fit-content;
            height: fit-content;
          `}
        >
          {/* OPTIONS AND SEARCH */}
          <SearchBar
            onSearchSubmitListener={(input) => console.log(input)}
            searchHint={'Search all units...'}
            canToggle
          />
          <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='tertiaryAccent' size='medium'>
            <OptionsIcon fontSize='medium' />
          </Button>
        </HorizontalDiv>
      </HorizontalDiv>
      <HeadingText variant='h3' color='textDark'>
        Your Units
      </HeadingText>
    </HeaderContainer>
  );
};

export default AllUnitsHeader;
