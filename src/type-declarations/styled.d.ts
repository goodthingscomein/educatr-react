// import original module declarations
import 'styled-components';

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
			black: string;
			transparent: string;
		};
		appBar: {
			appBarHeight: string;
		};
		sideDrawer: {
			sideDrawerWidth: string;
			sideDrawerMaxWidth: string;
		};
	}
}
