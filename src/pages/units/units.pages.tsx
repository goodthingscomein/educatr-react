import React, { useState } from 'react';

// Import styles
import {
  PageContainer,
  HeaderContainer,
  ContentContainer,
  CardGridContainer,
  UnitCard,
  UnitCardImage,
  UnitCardTextContainer,
} from './units.styles';

// Import custom components
import HeadingText from '../../components/heading/heading.components';
import Link from '../../components/link/link.components';
import HorizontalDiv from '../../components/horizontal-div/horizontal-div.components';
import { MainTheme } from '../../themes/main.theme';
import CopyText from '../../components/copy-text/copy-text.components';
import Button from '../../components/button/button.components';
import Input from '../../components/input/input.components';

// Import custom icons
import SearchIcon from '@mui/icons-material/Search';
import OptionsIcon from '@mui/icons-material/MoreVert';

type UnitsFilterTypes = 'current' | 'completed' | 'upcoming' | 'all';

// Render Component
const UnitsPage: React.FC = () => {
  // State for the currernt units filtered
  const [unitsFilter, setUnitsFilter] = useState<UnitsFilterTypes>('current');

  // State for search bar
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // Development units data
  const selectedUnits = [
    'MATH1000',
    'MATH1001',
    'MATH1002',
    'MATH1003',
    'MATH1004',
    'MATH1005',
    'MATH1006',
    'MATH1007',
  ];
  return (
    <PageContainer>
      <HeaderContainer>
        <HorizontalDiv
          backgroundColor='transparent'
          justifyContent='space-between'
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
              color={unitsFilter === 'current' ? 'primaryAccent' : 'textDark'}
              hoverColor='primaryAccent'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => setUnitsFilter('current')}
            >
              Current Units
            </Link>
            <Link
              color={unitsFilter === 'completed' ? 'primaryAccent' : 'textDark'}
              hoverColor='primaryAccent'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => setUnitsFilter('completed')}
            >
              Completed Units
            </Link>
            <Link
              color={unitsFilter === 'upcoming' ? 'primaryAccent' : 'textDark'}
              hoverColor='primaryAccent'
              underlineEffect='always'
              margin='0 16px 0 0'
              clickAction={() => setUnitsFilter('upcoming')}
            >
              Upcoming Units
            </Link>
            <Link
              color={unitsFilter === 'all' ? 'primaryAccent' : 'textDark'}
              hoverColor='primaryAccent'
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
        <HeadingText variant='h2' color='textDark'>
          Your Units
        </HeadingText>
      </HeaderContainer>
      <ContentContainer>
        <CardGridContainer numberOfColumns={4} numberOfRows={2} cardHeight='400px'>
          {selectedUnits.map((value, index) => {
            return (
              <UnitCard>
                <UnitCardImage
                  src={`https://picsum.photos/300?random=${index}`}
                  imageDarken={MainTheme.themeColors.shadow}
                ></UnitCardImage>
                <UnitCardTextContainer>
                  <CopyText size='large' color='textDark'>
                    {value} - Fundamentals to Mathematics {index}
                  </CopyText>
                </UnitCardTextContainer>
              </UnitCard>
            );
          })}
        </CardGridContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default UnitsPage;
