import React from 'react';

type Props = {
	appBarType: React.ReactElement<React.FC<{ appBar: true; supportsDrawer: true }>>;
	sideDrawerType: React.ReactElement<React.FC<{ sideDrawer: true }>>;
	children?: JSX.Element | JSX.Element[];
};

const AppBar_SideDrawer_PageTemplate: React.FC<Props> = ({ children, appBarType, sideDrawerType }) => (
	<>
		{appBarType}
		{children}
		{sideDrawerType}
	</>
);

export default AppBar_SideDrawer_PageTemplate;
