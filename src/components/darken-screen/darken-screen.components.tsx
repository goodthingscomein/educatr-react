import React from 'react';

// Import styles
import { DarkenScreenContainer } from './darken-screen.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  displaying?: boolean;
};

// Render Component
const DarkenScreen: React.FC<Props> = ({ children, displaying }) => (
  <DarkenScreenContainer displaying={displaying}>{children}</DarkenScreenContainer>
);

export default DarkenScreen;
