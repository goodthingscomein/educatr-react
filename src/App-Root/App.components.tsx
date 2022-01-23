import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Import themes
import { MainTheme } from '../themes/main.theme';

// Import styles
import { AppContainer } from './App.styles';

// Import routes
import PlatformLayoutPage from '../pages/platform-layout/platform-layout.pages';
import SignUpPage from '../pages/signup/signup.pages';
import LoginPage from '../pages/login/login.pages';

const AppWrapper = () => {
	return (
		<ThemeProvider theme={MainTheme}>
			<AppContainer>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/*" element={<PlatformLayoutPage />} />
				</Routes>
			</AppContainer>
		</ThemeProvider>
	);
};

export default AppWrapper;
