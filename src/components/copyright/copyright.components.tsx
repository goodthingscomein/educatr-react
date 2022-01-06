import React from 'react';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
};

// Render Component
const Copyright: React.FC<Props> = ({ children }) => (
	<></>
	// <Typography variant='body2' color='text.secondary' align='center'>
	// 	{'Copyright © '}
	// 	<Link color='inherit' href='https://www.datafluence.app/'>
	// 		Datafluence
	// 	</Link>{' '}
	// 	{new Date().getFullYear()}
	// 	{'.'}
	// </Typography>
);

export default Copyright;
