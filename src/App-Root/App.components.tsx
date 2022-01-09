import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Import themes
import { MainTheme } from '../themes/main.theme';

// Import styles
import { AppContainer } from './App.styles';

// Import routes
import Homepage from '../pages/homepage/homepage.pages';
import LoginPage from '../pages/login/login.pages';
import SignUpPage from '../pages/signup/signup.pages';
import ApplicationPage from '../pages/application/application.pages';

const AppWrapper = () => {
	return (
		<ThemeProvider theme={MainTheme}>
			<AppContainer>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='signup' element={<SignUpPage />} />
					<Route path='app/*' element={<ApplicationPage />} />
				</Routes>
			</AppContainer>
		</ThemeProvider>
	);
};

export default AppWrapper;
