import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation, useParams } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setYourUnitsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  PageContainer,
  ScrollContainer,
  HeaderContainer,
  ContentContainer,
  BackButtonContainer,
} from './unit-details.styles';

// Import custom components
import HeadingText from '../../components/heading-text/heading-text.components';
import Link from '../../components/link/link.components';
import HorizontalDiv from '../../components/horizontal-div/horizontal-div.components';
import Button from '../../components/button/button.components';
import Input from '../../components/input/input.components';

// Import custom icons
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/HelpOutline';
import OptionsIcon from '@mui/icons-material/MoreVert';
import LeftArrowIcon from '@mui/icons-material/ArrowBackIosNew';

// Import sub pages
import OverviewSubPage from './sub-pages/overview/overview.pages';
import RecordingsSubPage from './sub-pages/recordings/recordings.pages';
import ResourcesSubPage from './sub-pages/resources/resources.pages';
import NotFoundPage from '../not-found/not-found.pages';
import Icon from '../../components/icon/icon-components';

type Props = {
  // Drawer button nav url management
  setYourUnitsNavigationUrl: typeof setYourUnitsNavigationUrl;
};

// Render Component
const UnitDetailsPage: React.FC<Props> = ({ setYourUnitsNavigationUrl }) => {
  // State for search bar
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const { unitId } = useParams();

  const handleNavigateClick = (url: string) => {
    navigate(url);
    setYourUnitsNavigationUrl(url);
  };

  return (
    <PageContainer>
      <ScrollContainer>
        <HeaderContainer>
          <BackButtonContainer>
            <Button
              variant='text'
              size='small'
              textColor='textDark'
              hoverTextColor='tertiaryAccent'
              padding='4px'
              clickAction={() => handleNavigateClick('/units')}
            >
              <Icon padding='10px' margin='0 8px 0 0 '>
                <LeftArrowIcon fontSize='small' />
              </Icon>
              Back
            </Button>
          </BackButtonContainer>
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
                color={useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*$/g) ? 'tertiaryAccent' : 'textDark'}
                hoverColor='tertiaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => handleNavigateClick(`/units/${unitId}`)}
              >
                Overview
              </Link>
              <Link
                color={
                  useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/recordings$/g) ? 'tertiaryAccent' : 'textDark'
                }
                hoverColor='tertiaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => handleNavigateClick(`/units/${unitId}/recordings`)}
              >
                Recordings
              </Link>
              <Link
                color={
                  useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/resources$/g) ? 'tertiaryAccent' : 'textDark'
                }
                hoverColor='tertiaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => handleNavigateClick(`/units/${unitId}/resources`)}
              >
                Resources
              </Link>
              <Link
                color={
                  useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/assessments$/g) ? 'tertiaryAccent' : 'textDark'
                }
                hoverColor='tertiaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => handleNavigateClick(`/units/${unitId}/assessments`)}
              >
                Assessments
              </Link>
              <Link
                color={useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/grades$/g) ? 'tertiaryAccent' : 'textDark'}
                hoverColor='tertiaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => handleNavigateClick(`/units/${unitId}/grades`)}
              >
                Grades
              </Link>
              <Link
                color={useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/faq$/g) ? 'tertiaryAccent' : 'textDark'}
                hoverColor='tertiaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => handleNavigateClick(`/units/${unitId}/faq`)}
              >
                FAQ
              </Link>
              <Link
                color={
                  useLocation().pathname.match(/^\/units\/[A-Za-z0-9]*\/discussions$/g) ? 'tertiaryAccent' : 'textDark'
                }
                hoverColor='tertiaryAccent'
                underlineEffect='always'
                margin='0 16px 0 0'
                clickAction={() => handleNavigateClick(`/units/${unitId}/discussions`)}
              >
                Discussions
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
                <Input
                  placeholder={`Search in ${unitId?.toUpperCase()}...`}
                  value={searchValue}
                  onChangeStateDispatch={setSearchValue}
                />
              ) : (
                ''
              )}
              {/* Search button */}
              <Button
                variant='text'
                padding='18px'
                textColor='textDark'
                hoverTextColor='tertiaryAccent'
                size='medium'
                clickAction={() => setIsSearching(!isSearching)}
              >
                <SearchIcon fontSize='medium' />
              </Button>
              <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='tertiaryAccent' size='medium'>
                <HelpIcon fontSize='medium' />
              </Button>
              <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='tertiaryAccent' size='medium'>
                <OptionsIcon fontSize='medium' />
              </Button>
            </HorizontalDiv>
          </HorizontalDiv>
          <HeadingText variant='h3' color='textDark'>
            {unitId?.toUpperCase()} - Fundamentals of Discrete Mathematics
          </HeadingText>
        </HeaderContainer>
        <ContentContainer>
          <Routes>
            <Route path='/' element={<OverviewSubPage />} />
            <Route path='/recordings' element={<RecordingsSubPage />} />
            <Route path='/resources' element={<ResourcesSubPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </ContentContainer>
      </ScrollContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setYourUnitsNavigationUrl: (newUrl: string) => dispatch(setYourUnitsNavigationUrl(newUrl)),
});

export default connect(null, mapDispatchToProps)(UnitDetailsPage);
