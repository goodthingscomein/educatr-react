import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Import themes
import { MainTheme } from '../themes/main.theme';

// Import styles
import { AppContainer } from './App.styles';

// Import routes
import Homepage from '../pages/homepage/homepage.pages';

const AppWrapper = () => {
	return (
		<ThemeProvider theme={MainTheme}>
			<AppContainer>
				<Routes>
					<Route path='/' element={<Homepage />} />
				</Routes>
			</AppContainer>
		</ThemeProvider>
	);
};

export default AppWrapper;
