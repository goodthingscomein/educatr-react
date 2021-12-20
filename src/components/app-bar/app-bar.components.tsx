import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

import CustomSearchBox from '../search-box/search-box.components';
import AppBarText from '../app-bar-text/app-bar-text.components';
import AppBarButton from '../app-bar-button/app-bar-button.components';

// Import Website Constants
import WEBSITE from '../../assets/website.consts';

const CustomAppBar: React.FC = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <AppBarButton size='large' edge='start'>
            <MenuIcon />
          </AppBarButton>
          <AppBarText variant='h6'>{WEBSITE.SITE_TITLE}</AppBarText>
          <AppBarText variant='subtitle1'>Test</AppBarText>
          <CustomSearchBox />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
