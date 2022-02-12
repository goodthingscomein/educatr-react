import React from 'react';

// Import development data
import units from '../../data/units.data';

// Import styles
import { PageContainer, ContentContainer, AllUnitsGridContainer } from './all-units.styles';

// Import custom components
import AllUnitsHeader from '../../components/all-units-header/all-units-header.components';
import UnitCard from '../../components/unit-card/unit-card.components';

// Render Component
const AllUnitsPage: React.FC = () => {
  return (
    <PageContainer>
      <AllUnitsHeader />
      <ContentContainer>
        <AllUnitsGridContainer numberOfColumns={4} numberOfRows={4} cardHeight='375px'>
          {units.map((unit, index) => {
            return <UnitCard unit={unit} index={index} key={unit.code} />;
          })}
        </AllUnitsGridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default AllUnitsPage;
