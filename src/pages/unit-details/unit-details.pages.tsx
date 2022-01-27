import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation, useParams } from 'react-router-dom';

// Import styles
import { PageContainer, ScrollContainer, HeaderContainer, ContentContainer } from './unit-details.styles';

// Import custom components
import HeadingText from '../../components/heading/heading.components';
import Link from '../../components/link/link.components';
import HorizontalDiv from '../../components/horizontal-div/horizontal-div.components';
import Button from '../../components/button/button.components';
import Input from '../../components/input/input.components';

// Import custom icons
import SearchIcon from '@mui/icons-material/Search';
import OptionsIcon from '@mui/icons-material/MoreVert';

// Import sub pages
import OverviewSubPage from './sub-pages/overview/overview.components';
import RecordingsSubPage from './sub-pages/recordings/recordings.components';

// Render Component
const UnitDetailsPage: React.FC = () => {
  // State for search bar
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const { unitId } = useParams();

  return (
    <PageContainer>
      <ScrollContainer>
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
                color={useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*$/g) ? 'primaryAccent' : 'textDark'}
                hoverColor='primaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => navigate(`/units/${unitId}`)}
              >
                Overview
              </Link>
              <Link
                color={
                  useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/recordings$/g) ? 'primaryAccent' : 'textDark'
                }
                hoverColor='primaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => navigate(`/units/${unitId}/recordings`)}
              >
                Recordings
              </Link>
              <Link
                color={
                  useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/resources$/g) ? 'primaryAccent' : 'textDark'
                }
                hoverColor='primaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => navigate(`/units/${unitId}/resources`)}
              >
                Resources
              </Link>
              <Link
                color={
                  useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/assessments$/g) ? 'primaryAccent' : 'textDark'
                }
                hoverColor='primaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => navigate(`/units/${unitId}/assessments`)}
              >
                Assessments
              </Link>
              <Link
                color={useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/grades$/g) ? 'primaryAccent' : 'textDark'}
                hoverColor='primaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => navigate(`/units/${unitId}/grades`)}
              >
                Grades
              </Link>
              <Link
                color={
                  useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/feedback$/g) ? 'primaryAccent' : 'textDark'
                }
                hoverColor='primaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => navigate(`/units/${unitId}/feedback`)}
              >
                Feedback
              </Link>
              <Link
                color={useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/help$/g) ? 'primaryAccent' : 'textDark'}
                hoverColor='primaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => navigate(`/units/${unitId}/help`)}
              >
                Help
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
            Math[1004] - Fundamentals of Discrete Mathematics
          </HeadingText>
        </HeaderContainer>
        <ContentContainer>
          <Routes>
            <Route path='/' element={<OverviewSubPage />} />
            <Route path='/recordings' element={<RecordingsSubPage />} />
          </Routes>
        </ContentContainer>
      </ScrollContainer>
    </PageContainer>
  );
};

export default UnitDetailsPage;
