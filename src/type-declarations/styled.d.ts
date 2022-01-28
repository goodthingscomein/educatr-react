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
  | 'transparent'
  | 'darken'
  | 'lighten'
  | 'borderColor'
  | 'shadow'
  | 'darkShadow';

export type SocialColorTypes = 'twitter' | 'facebook' | 'linkedin' | 'youtube' | 'instagram' | 'tiktok' | 'pinterest';
export type MessageColorTypes =
  | 'infoLight'
  | 'infoDark'
  | 'successLight'
  | 'successDark'
  | 'warningLight'
  | 'warningDark'
  | 'errorLight'
  | 'errorDark';
export type FilterColorTypes =
  | 'filterRed'
  | 'filterOrange'
  | 'filterYellow'
  | 'filterGreen'
  | 'filterBlue'
  | 'filterPurple'
  | 'filterPink';

export type FontSizes = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export type FontWeight = 200 | 300 | 400 | 700;

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    themeColors: {
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
      darken: string;
      lighten: string;
      borderColor: string;
      shadow: string;
      darkShadow: string;
    };
    socialColors: {
      twitter: string;
      facebook: string;
      linkedin: string;
      youtube: string;
      instagram: string;
      tiktok: string;
      pinterest: string;
    };
    messageColors: {
      infoLight: string;
      infoDark: string;
      successLight: string;
      successDark: string;
      warningLight: string;
      warningDark: string;
      errorLight: string;
      errorDark: string;
    };
    filterColors: {
      filterRed: string;
      filterOrange: string;
      filterYellow: string;
      filterGreen: string;
      filterBlue: string;
      filterPurple: string;
      filterPink: string;
    };
    getColor: (input: ColorTypes | SocialColorTypes | MessageColorTypes | FilterColorTypes) => string;
    getFontSize: (input: FontSizes) => string;
    appBar: {
      appBarHeight: string;
    };
    drawer: {
      drawerClosedWidth: string;
      drawerOpenWidth: string;
    };
    borderRadius: string;
  }
}
