import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// Props to be passed into component
type Props = {
	children?: JSX.Element | JSX.Element[];
};

const CustomAppBar: React.FC<Props> = ({ children }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>{children}</Toolbar>
			</AppBar>
		</Box>
	);
};

export default CustomAppBar;
