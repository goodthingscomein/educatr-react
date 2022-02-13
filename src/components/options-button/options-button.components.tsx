import React from 'react';

// Import custom components
import Button from '../button/button.components';

// Import custom icons
import OptionsIcon from '@mui/icons-material/MoreVert';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
};

// Render Component
const OptionsButton: React.FC<Props> = () => (
  <Button
    variant='text'
    size='medium'
    textColor='textDark'
    hoverTextColor='tertiaryAccent'
    padding='10px'
    margin='0 0 0 12px'
  >
    <OptionsIcon />
  </Button>
);

export default OptionsButton;
