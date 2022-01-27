import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setYourUnitsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import development data
import units from '../../data/units.data';

// Import styles
import {
  PageContainer,
  HeaderContainer,
  ContentContainer,
  SearchUnitsGridContainer,
  UnitCard,
  UnitCardImage,
  UnitCardTextContainer,
} from './all-units.styles';

// Import custom components
import HeadingText from '../../components/heading/heading.components';
import Link from '../../components/link/link.components';
import HorizontalDiv from '../../components/horizontal-div/horizontal-div.components';
import Button from '../../components/button/button.components';
import Input from '../../components/input/input.components';
import CopyText from '../../components/copy-text/copy-text.components';
import VerticalDiv from '../../components/vertical-div/vertical-div.components';
import Margin from '../../components/margin/margin.components';

// Import custom icons
import SearchIcon from '@mui/icons-material/Search';
import OptionsIcon from '@mui/icons-material/MoreVert';

type AllUnitsFilterTypes = 'current' | 'completed' | 'upcoming' | 'all';

type Props = {
  // Drawer button nav url management
  setYourUnitsNavigationUrl: typeof setYourUnitsNavigationUrl;
};

// Render Component
const AllUnitsPage: React.FC<Props> = ({ setYourUnitsNavigationUrl }) => {
  // State for the currernt units filtered
  const [unitsFilter, setUnitsFilter] = useState<AllUnitsFilterTypes>('current');

  // State for search bar
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const handleNavigateClick = (url: string) => {
    navigate(url);
    setYourUnitsNavigationUrl(url);
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <HorizontalDiv
          backgroundColor='transparent'
          justifyContent='space-between'
          alignItems='flex-end'
          css={`
            width: 100%;
            height: fit-content;
          `}
        >
          <HorizontalDiv
            backgroundColor='transparent'
            css={`
              width: fit-content;
              height: fit-content;
            `}
          >
            {/* LINKS TO CHANGE UNIT FITLERS */}
            <Link
              color={unitsFilter === 'current' ? 'primary' : 'textDark'}
              hoverColor='primary'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => setUnitsFilter('current')}
            >
              Current Units
            </Link>
            <Link
              color={unitsFilter === 'completed' ? 'primary' : 'textDark'}
              hoverColor='primary'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => setUnitsFilter('completed')}
            >
              Completed Units
            </Link>
            <Link
              color={unitsFilter === 'upcoming' ? 'primary' : 'textDark'}
              hoverColor='primary'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => setUnitsFilter('upcoming')}
            >
              Upcoming Units
            </Link>
            <Link
              color={unitsFilter === 'all' ? 'primary' : 'textDark'}
              hoverColor='primary'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => setUnitsFilter('all')}
            >
              All Units
            </Link>
          </HorizontalDiv>
          <HorizontalDiv
            backgroundColor='transparent'
            css={`
              width: fit-content;
              height: fit-content;
            `}
          >
            {/* OPTIONS AND SEARCH */}
            {/* Search bar */}
            {isSearching ? (
              <Input placeholder='Search units...' value={searchValue} onChangeStateDispatch={setSearchValue} />
            ) : (
              ''
            )}
            {/* Search button */}
            <Button
              variant='text'
              padding='18px'
              textColor='textDark'
              hoverTextColor='primaryAccent'
              size='medium'
              clickAction={() => setIsSearching(!isSearching)}
            >
              <SearchIcon fontSize='medium' />
            </Button>
            <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='primaryAccent' size='medium'>
              <OptionsIcon fontSize='medium' />
            </Button>
          </HorizontalDiv>
        </HorizontalDiv>
        <HeadingText variant='h3' color='textDark'>
          Your Units
        </HeadingText>
      </HeaderContainer>
      <ContentContainer>
        <SearchUnitsGridContainer numberOfColumns={4} numberOfRows={4} cardHeight='400px'>
          {units.map((unit, index) => {
            return (
              <UnitCard>
                <UnitCardImage src={`https://picsum.photos/300?random=${index}`}></UnitCardImage>
                <UnitCardTextContainer>
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
                  {/* List of links */}
                  <HorizontalDiv
                    backgroundColor='transparent'
                    justifyContent='space-around'
                    alignItems='center'
                    css={`
                      width: 100%;
                      flex: 0 0 0;
                      flex-wrap: wrap;
                    `}
                  >
                    <Link
                      fontSize='small'
                      color='textDark'
                      hoverColor='secondary'
                      fontWeight={700}
                      underlineEffect='hover'
                      clickAction={() => handleNavigateClick(`/units/${unit.code}`)}
                    >
                      Overview
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
                  </HorizontalDiv>
                </UnitCardTextContainer>
              </UnitCard>
            );
          })}
        </SearchUnitsGridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setYourUnitsNavigationUrl: (newUrl: string) => dispatch(setYourUnitsNavigationUrl(newUrl)),
});

export default connect(null, mapDispatchToProps)(AllUnitsPage);
