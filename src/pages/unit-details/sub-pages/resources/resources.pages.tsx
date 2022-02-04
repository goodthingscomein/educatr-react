import React from 'react';

// Import development data
import resourceCollections from '../../../../data/resources-grouped.data';

// Import custom components
import ResourcesCollectionGrouped from '../../../../components/resources-collection-grouped/resources-collection-grouped.components';
import Divider from '../../../../components/divider/divider.components';

// Render Component
const ResourcesSubPage: React.FC = () => (
  <>
    {resourceCollections.map((collection, index) => {
      return (
        <>
          <ResourcesCollectionGrouped
            title={collection.collectionTitle}
            resources={collection.resources}
            numberOfColumns={5}
          />
          {resourceCollections.length !== index + 1 && <Divider color='dark' margin='60px 40px 40px 40px' />}
        </>
      );
    })}
  </>
);

export default ResourcesSubPage;
