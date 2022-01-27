import React, { useState } from 'react';

// Import development data
import units from '../../data/units.data';

// Import styles
import { PageContainer, ContentContainer, AllUnitsGridContainer } from './all-units.styles';

// Import custom components
import AllUnitsHeader from '../../components/all-units-header/all-units-header.components';
import UnitCard from '../../components/unit-card/unit-card.components';

export type AllUnitsFilterTypes = 'current' | 'completed' | 'upcoming' | 'all';

// Render Component
const AllUnitsPage: React.FC = () => {
  // State for the filtering of the units
  const [unitsFilter, setUnitsFilter] = useState<AllUnitsFilterTypes>('current');

  // State for search bar
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <PageContainer>
      <AllUnitsHeader
        unitsFilter={unitsFilter}
        setUnitsFilter={setUnitsFilter}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ContentContainer>
        <AllUnitsGridContainer numberOfColumns={4} numberOfRows={4} cardHeight='400px'>
          {units.map((unit, index) => {
            return <UnitCard unit={unit} index={index} key={unit.code} />;
          })}
        </AllUnitsGridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default AllUnitsPage;
