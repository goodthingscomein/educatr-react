import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import styles
import {
  HeaderContainer,
  BottomRowContainer,
  RightSideButtonsContainer,
  BackButtonContainer,
} from './sub-page-header.styles';

// Import custom components
import NavigationTabs, { NavigationTabType } from '../tabbed-navigation/tabbed-navigation.components';
import HeadingText from '../heading-text/heading-text.components';
import Button from '../button/button.components';
import Icon from '../icon/icon-components';

// Import custom icons
import BackArrowIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchBar from '../search-bar/search-bar.components';
import OptionsButton from '../options-button/options-button.components';
import { NavigationAction } from '../../redux/navigation/navigation.types';

// Component Props Interface
type Props = {
  heading: string;
  backNavUrl?: string;
  rootUrl: string;
  navigationTabs: NavigationTabType[];
  navigationDispatch: (newUrl: string) => NavigationAction;
  searchHint: string;
  onSearchSubmitListener: (input: string) => unknown;
};

// Render Component
const SubPageHeader: React.FC<Props> = ({
  heading,
  backNavUrl,
  rootUrl,
  navigationTabs,
  navigationDispatch,
  searchHint,
  onSearchSubmitListener,
}) => {
  // Used to navigate back if needed
  const navigate = useNavigate();

  // On navigation tab click action
  const backButtonClickAction = (newUrl: string) => {
    navigationDispatch(newUrl);
    navigate(newUrl);
  };

  // Render header
  return (
    <HeaderContainer>
      {backNavUrl && (
        <BackButtonContainer>
          <Button
            variant='text'
            size='small'
            textColor='textDark'
            hoverTextColor='tertiaryAccent'
            padding='0'
            clickAction={() => backButtonClickAction(backNavUrl)}
          >
            <Icon padding='10px' margin='0 8px 0 0'>
              <BackArrowIcon fontSize='small' />
            </Icon>
            Back
          </Button>
        </BackButtonContainer>
      )}
      <HeadingText variant='h3' color='textDark'>
        {heading}
      </HeadingText>
      <BottomRowContainer>
        <NavigationTabs navigationTabs={navigationTabs} rootUrl={rootUrl} navigationDispatch={navigationDispatch} />
        <RightSideButtonsContainer>
          <SearchBar
            searchHint={searchHint}
            onSearchSubmitListener={(input) => onSearchSubmitListener(input)}
            canToggle
          />
          <OptionsButton />
        </RightSideButtonsContainer>
      </BottomRowContainer>
    </HeaderContainer>
  );
};

export default SubPageHeader;
