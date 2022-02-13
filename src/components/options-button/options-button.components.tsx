import React from 'react';

// Import custom components
import Button from '../button/button.components';

// Import custom icons
import OptionsIcon from '@mui/icons-material/MoreVert';

// Component Props Interface
type Props = {
  hasLightTheme?: boolean;
};

// Render Component
const OptionsButton: React.FC<Props> = ({ hasLightTheme }) => (
  <Button
    variant='text'
    size='medium'
    textColor={hasLightTheme ? 'white' : 'textDark'}
    hoverTextColor={hasLightTheme ? 'primaryAccent' : 'tertiaryAccent'}
    padding='10px'
    margin='0 0 0 16px'
  >
    <OptionsIcon />
  </Button>
);

export default OptionsButton;
