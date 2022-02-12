import React from 'react';

// Import development data
import resourceCollections from '../../../../data/resources-grouped.data';

// Import custom components
import CardCollection from '../../../../components/card-collection/card-collection.components';
import ResourceCard from '../../../../components/resource-card/resource-card.components';

// Render Component
const ResourcesSubPage: React.FC = () => (
  <>
    {resourceCollections.map((collection, index) => {
      return (
        <CardCollection
          heading={collection.collectionTitle}
          numberOfColumns={5}
          numberOfCards={collection.resources.length}
          hasDivider={resourceCollections.length !== index + 1}
        >
          {collection.resources.map((resource, index) => {
            return <ResourceCard key={index} resource={resource} />;
          })}
        </CardCollection>
      );
    })}
  </>
);

export default ResourcesSubPage;
