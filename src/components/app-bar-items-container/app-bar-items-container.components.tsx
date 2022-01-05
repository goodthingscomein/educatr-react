import React from 'react';

// Import styles
import {AppBarContainer} from './app-bar-items-container.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  horizontalMargin?: number;
};

// Render Component
const AppBarItemsContainer: React.FC<Props> = ({children, horizontalMargin}) => (
  <AppBarContainer horizontalMargin={horizontalMargin}>{children}</AppBarContainer>
);

export default AppBarItemsContainer;
