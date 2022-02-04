import React from 'react';

// Import styles
import { ResourceCardGridContainer } from './resources-collection.styles';

// Import custom components
import ResourceCard from '../resource-card/resource-card.components';

// Import typing
import { ResourceDataType } from '../../data/resources.data';

// Component Props Interface
type Props = {
  resources: ResourceDataType[];
  numberOfColumns: number;
};

// Render Component
const ResourcesCollection: React.FC<Props> = ({ resources, numberOfColumns }) => (
  <ResourceCardGridContainer
    numberOfColumns={numberOfColumns}
    numberOfRows={Math.ceil(resources.length / numberOfColumns)}
  >
    {resources.map((resource, index) => {
      return (
        <ResourceCard
          key={index}
          resourceUrl={resource.resourceUrl}
          thumbnailSrc={resource.imgSrc}
          title={resource.resourceTitle}
          description={resource.description}
        />
      );
    })}
  </ResourceCardGridContainer>
);

export default ResourcesCollection;
