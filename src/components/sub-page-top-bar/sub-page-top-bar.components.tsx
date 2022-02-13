import React from 'react';

// Import styles
import { TopBarContainer } from './sub-page-top-bar.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  backgroundColor: 'white' | 'textDark' | 'primary' | 'primaryAccent';
  hasShadow?: boolean;
};

// Render Component
const SubPageTopBar: React.FC<Props> = ({ children, backgroundColor, hasShadow }) => (
  <TopBarContainer backgroundColor={backgroundColor} hasShadow={hasShadow}>
    {children}
  </TopBarContainer>
);

export default SubPageTopBar;
