import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.pages';

// Import CSS Baseline from MUI
import { CssBaseline } from '@mui/material';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</div>
	);
};

export default App;
