import React from 'react';

// Import development data
import resourcesData from '../../../../data/resources.data';

// Import styles
import { SubPageContainer } from './resources.styles';

// Import custom components
import CardCollection from '../../../../components/card-collection/card-collection.components';
import ResourceCard from '../../../../components/resource-card/resource-card.components';

// Render Component
const ResourcesSubPage: React.FC = () => {
  // Development test data
  const resources = resourcesData.filter((val, i) => i < 3);

  return (
    <SubPageContainer>
      <CardCollection numberOfColumns={4} numberOfCards={resources.length}>
        {resources.map((resource, index) => {
          return <ResourceCard key={index} resource={resource} />;
        })}
      </CardCollection>
    </SubPageContainer>
  );
};

export default ResourcesSubPage;
