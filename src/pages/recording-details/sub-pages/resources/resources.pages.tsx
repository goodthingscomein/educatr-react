import React from 'react';

// Import development data
import resourcesData from '../../../../data/resources.data';

// Import styles
import { SubPageContainer } from './resources.styles';

// Import custom components
import Margin from '../../../../components/margin/margin.components';
import CopyText from '../../../../components/copy-text/copy-text.components';

// Import custom icons
import Divider from '../../../../components/divider/divider.components';
import ResourcesCollection from '../../../../components/resources-collection/resources-collection.components';

// Render Component
const ResourcesSubPage: React.FC = () => {
  return (
    <SubPageContainer>
      <CopyText size='large' color='textDark' fontWeight={400}>
        All Related Resources
      </CopyText>
      <Margin height='24px' />
      <ResourcesCollection resources={resourcesData.filter((val, i) => i < 8)} numberOfColumns={4} />
    </SubPageContainer>
  );
};

export default ResourcesSubPage;
