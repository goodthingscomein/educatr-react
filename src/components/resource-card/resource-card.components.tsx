import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import styles
import { ResourceCardContainer, Thumbnail, CardTextContainer } from './resource-card.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';
import Margin from '../margin/margin.components';
import VerticalDiv from '../vertical-div/vertical-div.components';

// Import custom data types
import { ResourceDataType } from '../../data/resources.data';

// Component Props Interface
type Props = {
  resource: ResourceDataType;
};

// Render Component
const ResourceCard: React.FC<Props> = ({ resource }) => {
  // Navigate url
  const navigate = useNavigate();

  return (
    <ResourceCardContainer onClick={() => navigate(resource.resourceUrl)}>
      {/* Resource Thumbnail Image */}
      <Thumbnail src={resource.imgSrc} />
      <CardTextContainer>
        {/* Resource Title + Description */}
        <VerticalDiv
          backgroundColor='transparent'
          justifyContent='flex-start'
          alignItems='flex-start'
          css={`
            width: 100%;
            flex: 1 0 0;
          `}
        >
          <CopyText size='medium' color='textDark' fontWeight={400}>
            {resource.resourceTitle.substring(0, 28)}
            {resource.resourceTitle.length >= 28 && '...'}
          </CopyText>
          <Margin width='100%' height='4px' />
          <CopyText size='x-small' color='textLight' fontWeight={300}>
            {resource.description.substring(0, 75)}
            {resource.description.length >= 75 && '...'}
          </CopyText>
        </VerticalDiv>
      </CardTextContainer>
    </ResourceCardContainer>
  );
};

export default ResourceCard;
