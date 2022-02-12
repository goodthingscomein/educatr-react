import React from 'react';

// Import development data
import units from '../../data/units.data';

// Import styles
import { PageContainer, ContentContainer, AllUnitsGridContainer } from './all-units.styles';

// Import custom components
import SubPageHeader from '../../components/sub-page-header/sub-page-header.components';
import { NavigationTabType } from '../../components/tabbed-navigation/tabbed-navigation.components';
import UnitCard from '../../components/unit-card/unit-card.components';

// Render Component
const AllUnitsPage: React.FC = () => {
  // The tabbed navigation items
  const allUnitsNavigationTabs: NavigationTabType[] = [
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

  // Render the Your Units page
  return (
    <PageContainer>
      <SubPageHeader
        heading={'Your Units'}
        navigationTabs={allUnitsNavigationTabs}
        searchHint='Search all units...'
        onSearchSubmitListener={(input) => console.log(input)}
        rootUrl='/units'
      />
      <ContentContainer>
        <AllUnitsGridContainer numberOfColumns={4} numberOfRows={4} cardHeight='375px'>
          {units.map((unit, index) => {
            return <UnitCard key={unit.code} unit={unit} index={index} />;
          })}
        </AllUnitsGridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default AllUnitsPage;
