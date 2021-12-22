import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.pages';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Homepage />} />
			</Routes>
		</div>
	);
};

export default App;
