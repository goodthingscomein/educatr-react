import { DefaultTheme } from 'styled-components';

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
	socialColors: {
		twitter: '#1DA1F2',
		facebook: '#1877F2',
		linkedin: '#0A66C2',
		youtube: '#CD201F',
		instagram: '#E4405F',
		tiktok: '#EE1D51',
		pinterest: '#BD081C',
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
