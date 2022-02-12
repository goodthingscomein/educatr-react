import React from 'react';

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
import BackButton from '../back-button/back-button.components';
import SearchBar from '../search-bar/search-bar.components';
import OptionsButton from '../options-button/options-button.components';

// Import custom data types
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

const SubPageHeader: React.FC<Props> = ({
  heading,
  backNavUrl,
  rootUrl,
  navigationTabs,
  navigationDispatch,
  searchHint,
  onSearchSubmitListener,
}) => {
  // Render sub-page header container
  return (
    <HeaderContainer>
      {backNavUrl && (
        <BackButtonContainer>
          <BackButton
            backToUrl={backNavUrl}
            navigationDispatch={navigationDispatch}
            color={'textDark'}
            hoverColor={'tertiaryAccent'}
          />
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
