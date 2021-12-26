import React from 'react';

// Import Material UI
import { Link, Typography } from '@mui/material';

// Component Props Interface
type Props = {
	children?: JSX.Element | JSX.Element[];
};

// Render Component
const Copyright: React.FC<Props> = ({ children }) => (
	<Typography variant="body2" color="text.secondary" align="center">
		{'Copyright © '}
		<Link color="inherit" href="https://www.datafluence.app/">
			Datafluence
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
);

export default Copyright;
