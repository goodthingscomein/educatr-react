import React from 'react';

// Import styles
import { DrawerHeaderContainer } from './sub-page-drawer-header.styles';

// Import custom components
import HeadingText from '../heading-text/heading-text.components';
import Margin from '../margin/margin.components';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  heading: string;
};

// Render Component
const SubPageDrawerHeader: React.FC<Props> = ({ children, heading }) => (
  <DrawerHeaderContainer>
    <HeadingText variant='h5' color='textDark'>
      {heading}
    </HeadingText>
    <Margin height='20px' width='100%' />
    {children}
  </DrawerHeaderContainer>
);

export default SubPageDrawerHeader;
