import React from 'react';

// Import styles
import { ResourceCardGridContainer } from './resources-collection.styles';

// Import custom components
import HeadingText from '../heading/heading.components';
import Margin from '../margin/margin.components';
import ResourceCard from '../resource-card/resource-card.components';

// Import typing
import { ResourceDataType } from '../../data/resources.data';

// Component Props Interface
type Props = {
  title: string;
  resources: ResourceDataType[];
  numberOfColumns: number;
};

// Render Component
const ResourcesCollection: React.FC<Props> = ({ title, resources, numberOfColumns }) => (
  <>
    <HeadingText variant='h4' color='textDark'>
      {title.substring(0, 50)}
      {title.length >= 50 && '...'}
    </HeadingText>
    <Margin width='100%' height='20px' />
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
  </>
);

export default ResourcesCollection;
