import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setYourUnitsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  UnitCardContainer,
  CardImageHoverText,
  CardImage,
  CardTextMainContainer,
  CardLinksContainer,
} from './unit-card.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';
import Link from '../link/link.components';
import Margin from '../margin/margin.components';
import VerticalDiv from '../vertical-div/vertical-div.components';

// Import data types
import { UnitDataType } from '../../data/units.data';
import Divider from '../divider/divider.components';

// Component Props Interface
type Props = {
  unit: UnitDataType;
  index: number;

  setYourUnitsNavigationUrl: typeof setYourUnitsNavigationUrl;
};

// Render Component
const UnitCard: React.FC<Props> = ({ unit, index, setYourUnitsNavigationUrl }) => {
  const navigate = useNavigate();

  const handleNavigateClick = (url: string) => {
    navigate(url);
    setYourUnitsNavigationUrl(url);
  };

  return (
    <UnitCardContainer>
      <CardImage
        src={`https://picsum.photos/480/240?random=${index}`}
        onClick={() => handleNavigateClick(`/units/${unit.code}/overview`)}
      >
        <CardImageHoverText>
          <CopyText size={'small'} color={'white'}>
            Go To Unit Overview
          </CopyText>
        </CardImageHoverText>
      </CardImage>
      <CardTextMainContainer>
        {/* Title + blurb */}
        <VerticalDiv
          backgroundColor='transparent'
          justifyContent='flex-start'
          alignItems='flex-start'
          css={`
            width: 100%;
            flex: 0 0 0;
          `}
        >
          <CopyText size='large' color='textDark'>
            {unit.code.toUpperCase()} - {unit.title}
          </CopyText>
          <Margin width='100%' height='8px' />
          <CopyText size='x-small' color='textDark' fontWeight={300}>
            {unit.description}
          </CopyText>
        </VerticalDiv>
        <Divider color='dark' margin='32px 0 8px 0' />
        {/* List of links */}
        <CardLinksContainer>
          <Link
            fontSize='small'
            color='textDark'
            hoverColor='secondary'
            fontWeight={700}
            underlineEffect='hover'
            clickAction={() => handleNavigateClick(`/units/${unit.code}/recordings`)}
          >
            Recordings
          </Link>
          <Link
            fontSize='small'
            color='textDark'
            hoverColor='secondary'
            fontWeight={700}
            underlineEffect='hover'
            clickAction={() => handleNavigateClick(`/units/${unit.code}/resources`)}
          >
            Resources
          </Link>
          <Link
            fontSize='small'
            color='textDark'
            hoverColor='secondary'
            fontWeight={700}
            underlineEffect='hover'
            clickAction={() => handleNavigateClick(`/units/${unit.code}/assessments`)}
          >
            Assessments
          </Link>
          <Link
            fontSize='small'
            color='textDark'
            hoverColor='secondary'
            fontWeight={700}
            underlineEffect='hover'
            clickAction={() => handleNavigateClick(`/units/${unit.code}/grades`)}
          >
            Grades
          </Link>
        </CardLinksContainer>
      </CardTextMainContainer>
    </UnitCardContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setYourUnitsNavigationUrl: (newUrl: string) => dispatch(setYourUnitsNavigationUrl(newUrl)),
});

export default connect(null, mapDispatchToProps)(UnitCard);
