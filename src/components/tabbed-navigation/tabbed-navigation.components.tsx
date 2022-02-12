import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Import styles
import { NavigationTabsContainer } from './tabbed-navigation.styles';

// Import custom components
import Link from '../link/link.components';
import { NavigationAction } from '../../redux/navigation/navigation.types';

export type NavigationTabType = {
  label: string;
  to: string;
  urlRegexMatch: {
    [Symbol.match](string: string): RegExpMatchArray | null;
  };
};

// Component Props Interface
type Props = {
  navigationTabs: NavigationTabType[];
  rootUrl: string;
  navigationDispatch: (newUrl: string) => NavigationAction;
};

// Render Component
const TabbedNavigation: React.FC<Props> = ({ navigationTabs, rootUrl, navigationDispatch }) => {
  const navigate = useNavigate();

  const tabClickAction = (newUrl: string) => {
    navigationDispatch(`${rootUrl}/${newUrl}`);
    navigate(`${rootUrl}/${newUrl}`);
  };

  // Render navigation tabs
  return (
    <NavigationTabsContainer>
      {navigationTabs.map((navigationTab) => {
        return (
          <Link
            key={navigationTab.label}
            color={useLocation().pathname.match(navigationTab.urlRegexMatch) ? 'tertiaryAccent' : 'textDark'}
            hoverColor='tertiaryAccent'
            underlineEffect='always'
            margin='0 16px 0 0'
            clickAction={() => tabClickAction(navigationTab.to)}
          >
            {navigationTab.label}
          </Link>
        );
      })}
    </NavigationTabsContainer>
  );
};

export default TabbedNavigation;
