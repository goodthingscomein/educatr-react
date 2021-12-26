import React from 'react';

// Import Env Constants
import { WEBSITE } from '../../assets/environment.consts';

// MUI Components
import { Box, Button, IconButton, Typography } from '@mui/material';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';

// Custom Components
import CustomAppBar from '../../components/app-bar/app-bar.components';

// Homepage Functional Component
const Homepage: React.FC = () => {
	return (
		<>
			<CustomAppBar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{WEBSITE.SITE_TITLE}
				</Typography>
			</CustomAppBar>
			<Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
				<Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize: '260%', textAlign: 'center' }}>
					Connecting <span>Influencers</span> and <span>Brands</span>
				</Typography>
			</Box>
		</>
	);
};

export default Homepage;
