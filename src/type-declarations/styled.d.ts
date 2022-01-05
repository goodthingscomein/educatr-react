// import original module declarations
import 'styled-components';

export type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'primaryAccent'
  | 'secondaryAccent'
  | 'tertiaryAccent'
  | 'textDark'
  | 'textLight'
  | 'white'
  | 'lightGrey'
  | 'black'
  | 'transparent';

export type FontSizes = 'small' | 'medium' | 'large' | 'x-large';
export type FontWeight = 200 | 300 | 400 | 700;

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      primaryAccent: string;
      secondaryAccent: string;
      tertiaryAccent: string;
      textDark: string;
      textLight: string;
      white: string;
      lightGrey: string;
      black: string;
      transparent: string;
    };
    getColor: (input: ColorTypes) => string;
    getFontSize: (input: FontSizes) => string;
    appBar: {
      appBarHeight: string;
    };
    sideDrawer: {
      sideDrawerWidth: string;
      sideDrawerMaxWidth: string;
    };
  }
}
