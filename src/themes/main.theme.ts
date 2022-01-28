import { DefaultTheme } from 'styled-components';

export const MainTheme: DefaultTheme = {
  themeColors: {
    primary: '#9b59b6',
    secondary: '#8e44ad',
    tertiary: '#703688',
    primaryAccent: '#f1c40f',
    secondaryAccent: '#f39c12',
    tertiaryAccent: '#d8890b',
    textDark: '#1F1F1F',
    textLight: '#6F6F6F',
    white: '#FFFFFF',
    lightGrey: '#F6F6F6',
    black: '#000000',
    transparent: 'transparent',
    darken: 'rgba(0, 0, 0, 0.15)',
    lighten: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    shadow: 'rgba(0, 0, 0, 0.3)',
    darkShadow: 'rgba(0, 0, 0, 0.6)',
  },
  socialColors: {
    twitter: '#1DA1F2',
    facebook: '#1877F2',
    linkedin: '#0A66C2',
    youtube: '#CD201F',
    instagram: '#E4405F',
    tiktok: '#EE1D51',
    pinterest: '#BD081C',
  },
  messageColors: {
    infoLight: '#BDE5F8',
    infoDark: '#00529B',
    successLight: '#DFF2BF',
    successDark: '#4F8A10',
    warningLight: '#FEEFB3',
    warningDark: '#9F6000',
    errorLight: '#FFD2D2',
    errorDark: '#D8000C',
  },
  filterColors: {
    filterRed: '#e74c3c',
    filterOrange: '#e67e22',
    filterYellow: '#f1c40f',
    filterGreen: '#2ecc71',
    filterBlue: '#3498db',
    filterPurple: '#8e44ad',
    filterPink: '#fd79a8',
  },
  getColor: (input) => {
    switch (input) {
      case 'primary':
        return '#9b59b6';
      case 'secondary':
        return '#8e44ad';
      case 'tertiary':
        return '#703688';
      case 'primaryAccent':
        return '#f1c40f';
      case 'secondaryAccent':
        return '#f39c12';
      case 'tertiaryAccent':
        return '#d8890b';
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
      case 'darken':
        return 'rgba(0, 0, 0, 0.15)';
      case 'lighten':
        return 'rgba(255, 255, 255, 0.1)';
      case 'borderColor':
        return 'rgba(0, 0, 0, 0.2)';
      case 'shadow':
        return 'rgba(0, 0, 0, 0.3)';
      case 'darkShadow':
        return 'rgba(0, 0, 0, 0.6)';
      case 'twitter':
        return '#1DA1F2';
      case 'facebook':
        return '#1877F2';
      case 'linkedin':
        return '#0A66C2';
      case 'youtube':
        return '#CD201F';
      case 'instagram':
        return '#FFDC80';
      case 'tiktok':
        return '#EE1D51';
      case 'pinterest':
        return '#BD081C';
      case 'infoLight':
        return '#BDE5F8';
      case 'infoDark':
        return '#00529B';
      case 'successLight':
        return '#DFF2BF';
      case 'successDark':
        return '#4F8A10';
      case 'warningLight':
        return '#FEEFB3';
      case 'warningDark':
        return '#9F6000';
      case 'errorLight':
        return '#FFD2D2';
      case 'errorDark':
        return '#D8000C';
      case 'filterRed':
        return '#e74c3c';
      case 'filterOrange':
        return '#e67e22';
      case 'filterYellow':
        return '#f1c40f';
      case 'filterGreen':
        return '#2ecc71';
      case 'filterBlue':
        return '#3498db';
      case 'filterPurple':
        return '#8e44ad';
      case 'filterPink':
        return '#fd79a8';
    }
  },
  getFontSize: (input) => {
    switch (input) {
      case 'x-small':
        return '60%';
      case 'small':
        return '70%';
      case 'medium':
        return '80%';
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
  borderRadius: '4px',
};
