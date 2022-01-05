import {DefaultTheme} from 'styled-components';

export const MainTheme: DefaultTheme = {
  colors: {
    primary: '#F79F1F',
    secondary: '#EE5A24',
    tertiary: '#df4811',
    primaryAccent: '#0652DD',
    secondaryAccent: '#04399b',
    tertiaryAccent: '#032769',
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
        return '#F79F1F';
      case 'secondary':
        return '#EE5A24';
      case 'tertiary':
        return '#df4811';
      case 'primaryAccent':
        return '#0652DD';
      case 'secondaryAccent':
        return '#04399b';
      case 'tertiaryAccent':
        return '#032769';
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
  getFontSize: (input) => {
    switch (input) {
      case 'small':
        return '70%';
      case 'medium':
        return '85%';
      case 'large':
        return '100%';
      case 'x-large':
        return '120%';
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
