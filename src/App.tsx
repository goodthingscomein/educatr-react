import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.pages';
import CreateAccountPage from './pages/create-account/create-account.pages';
import LoginPage from './pages/login/login.pages';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/create-account' element={<CreateAccountPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</div>
	);
};

export default App;
