import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import custom components
import Button from '../button/button.components';
import Icon from '../icon/icon-components';

// Import custom icons
import BackArrowIcon from '@mui/icons-material/ArrowBackIosNew';

// Import custom types
import { NavigationAction } from '../../redux/navigation/navigation.types';

// Component Props Interface
type Props = {
  backToUrl: string;
  navigationDispatch: (newUrl: string) => NavigationAction;
  color: 'textDark' | 'white';
  hoverColor: 'primaryAccent' | 'tertiaryAccent';
};

// Render Component
const component: React.FC<Props> = ({ backToUrl, navigationDispatch, color, hoverColor }) => {
  const navigate = useNavigate();

  // Back Button on click action
  const backButtonClickAction = () => {
    navigationDispatch(backToUrl);
    navigate(backToUrl);
  };

  return (
    <Button
      variant='text'
      size='small'
      textColor={color}
      hoverTextColor={hoverColor}
      padding='0'
      clickAction={() => backButtonClickAction()}
    >
      <Icon padding='10px' margin='0 8px 0 0'>
        <BackArrowIcon fontSize='small' />
      </Icon>
      Back
    </Button>
  );
};

export default component;
