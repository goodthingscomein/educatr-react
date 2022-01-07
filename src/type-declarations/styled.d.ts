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

export type FontSizes = 'small' | 'medium' | 'large' | 'x-large';
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
		getColor: (input: ColorTypes | SocialColorTypes | MessageColorTypes) => string;
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
