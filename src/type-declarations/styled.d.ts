// import original module declarations
import 'styled-components';

export type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'textDark'
  | 'textLight'
  | 'white'
  | 'lightGrey'
  | 'black'
  | 'transparent';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      textDark: string;
      textLight: string;
      white: string;
      lightGrey: string;
      black: string;
      transparent: string;
    };
    getColor: (input: ColorTypes) => string;
    appBar: {
      appBarHeight: string;
    };
    sideDrawer: {
      sideDrawerWidth: string;
      sideDrawerMaxWidth: string;
    };
  }
}
