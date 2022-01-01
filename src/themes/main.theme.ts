import {DefaultTheme} from 'styled-components';

export const MainTheme: DefaultTheme = {
  colors: {
    primary: '#E67E22',
    secondary: '#D35400',
    accent: '#1ABC9C',
    textDark: '#1A1A1A',
    textLight: '#6F6F6F',
    white: '#FFFFFF',
    lightGrey: '#EFEFEF',
    black: '#000000',
    transparent: 'transparent',
  },
  getColor: (input) => {
    switch (input) {
      case 'primary':
        return '#E67E22';
      case 'secondary':
        return '#D35400';
      case 'accent':
        return '#1ABC9C';
      case 'textDark':
        return '#1A1A1A';
      case 'textLight':
        return '#6F6F6F';
      case 'white':
        return '#FFFFFF';
      case 'lightGrey':
        return '#EFEFEF';
      case 'black':
        return '#000000';
      case 'transparent':
        return 'transparent';
    }
  },
  appBar: {
    appBarHeight: '70px',
  },
  sideDrawer: {
    sideDrawerWidth: '20%',
    sideDrawerMaxWidth: '300px',
  },
};
