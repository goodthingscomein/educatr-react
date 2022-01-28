import React from 'react';

// Import development data
import resourceCollections from '../../../../data/resources.data';

// Import custom components
import ResourcesCollection from '../../../../components/resources-collection/resources-collection.components';
import Divider from '../../../../components/divider/divider.components';

// Render Component
const ResourcesSubPage: React.FC = () => (
  <>
    {resourceCollections.map((collection, index) => {
      return (
        <>
          <ResourcesCollection
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
