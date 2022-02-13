import React from 'react';

// Import styles
import { DrawerContainer } from './sub-page-drawer.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
};

// Render Component
const SubPageDrawer: React.FC<Props> = ({ children }) => <DrawerContainer>{children}</DrawerContainer>;

export default SubPageDrawer;
