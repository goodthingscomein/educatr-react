import React from 'react';

// Import styles
import { TopBarContainer } from './sub-page-top-bar.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  backgroundColor: 'white' | 'textDark' | 'primary' | 'primaryAccent';
};

// Render Component
const SubPageTopBar: React.FC<Props> = ({ children, backgroundColor }) => (
  <TopBarContainer backgroundColor={backgroundColor}>{children}</TopBarContainer>
);

export default SubPageTopBar;
