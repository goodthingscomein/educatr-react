import React from 'react';

// Import styles
import { DrawerButton } from './sub-page-drawer-button.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  selected?: boolean;
  clickAction?: () => unknown;
};

// Render Component
const SubPageDrawerButton: React.FC<Props> = ({ children, selected, clickAction }) => (
  <DrawerButton selected={selected} onClick={clickAction ? () => clickAction() : undefined}>
    {children}
  </DrawerButton>
);

export default SubPageDrawerButton;
