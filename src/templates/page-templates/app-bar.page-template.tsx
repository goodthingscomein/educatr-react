import React from 'react';

type Props = {
	appBarType: React.ReactNode;
	children?: JSX.Element | JSX.Element[];
};

const AppBar_PageTemplate: React.FC<Props> = ({ children, appBarType }) => (
	<>
		{appBarType}
		{children}
	</>
);

export default AppBar_PageTemplate;
