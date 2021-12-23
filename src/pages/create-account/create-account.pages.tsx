import React from 'react';

// Import Page Templates
import AppBar_SideDrawer_PageTemplate from '../../templates/page-templates/app-bar_side-drawer.page-template';

// Import Component Templates
import AppBar_SideDrawer_Standard from '../../templates/component-templates/app-bars/supports-side-drawer/app-bar_side-drawer_standard.template';
import SideDrawer_Standard from '../../templates/component-templates/side-drawer/side-drawer-standard.template';

const CreateAccountPage: React.FC = () => (
	<AppBar_SideDrawer_PageTemplate
		appBarType={<AppBar_SideDrawer_Standard />}
		sideDrawerType={<SideDrawer_Standard />}
	/>
);

export default CreateAccountPage;
