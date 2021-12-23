import React from 'react';

// Import Page Templates
import AppBar_SideDrawer_PageTemplate from '../../templates/page-templates/app-bar_side-drawer.page-template';

// Import Component Templates
import SideDrawer_Standard from '../../templates/component-templates/side-drawer/side-drawer-standard.template';
import AppBar_SideDrawer_Search from '../../templates/component-templates/app-bars/supports-side-drawer/app-bar_side-drawer_search.template';

import AppBar_Standard from '../../templates/component-templates/app-bars/no-side-drawer/app-bar_standard.template';

const Homepage: React.FC = () => (
	<AppBar_SideDrawer_PageTemplate appBarType={<AppBar_SideDrawer_Search />} sideDrawerType={<SideDrawer_Standard />} />
);

export default Homepage;
