import React from 'react';

// Import styles
import { CreateButtonTextContainer } from './create-button.styles';

// Import custom components
import Button from '../button/button.components';
import Icon from '../icon/icon-components';

// Import custom icons
import AddIcon from '@mui/icons-material/Add';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
};

// Render Component
const CreateButton: React.FC<Props> = () => (
  <Button
    variant='solid'
    size='large'
    backgroundColor='primaryAccent'
    hoverBackgroundColor='secondaryAccent'
    textColor='white'
    padding='4px 12px'
    minWidth='100%'
    fontWeight={600}
  >
    <CreateButtonTextContainer>
      <Icon padding='10px' margin='0 12px 0 0'>
        <AddIcon fontSize='large' />
      </Icon>
      Create
    </CreateButtonTextContainer>
  </Button>
);

export default CreateButton;
