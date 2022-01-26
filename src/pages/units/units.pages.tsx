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

type UnitsFilterTypes = 'current' | 'completed' | 'upcoming' | 'all';

// Render Component
const UnitsPage: React.FC = () => {
  const [unitsFilter, setUnitsFilter] = useState<UnitsFilterTypes>('current');
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
          css={`
            width: 100%;
            height: fit-content;
          `}
        >
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
