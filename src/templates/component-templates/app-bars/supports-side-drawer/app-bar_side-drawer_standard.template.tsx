import React from 'react';

// Custom Components
import CustomAppBar from '../../../../components/app-bar/app-bar.components';
import MenuButton from '../../buttons/app-bar-buttons/icon-buttons/menu-button.template';
import AppBarText from '../../../../components/app-bar-text/app-bar-text.components';

// Website consts
import WEBSITE from '../../../../assets/website.consts';

const AppBar_SideDrawer_Standard: React.FC<{ appBar: true; supportsDrawer: true }> = () => (
	<CustomAppBar>
		<MenuButton />
		<AppBarText variant='h6'>{WEBSITE.SITE_TITLE}</AppBarText>
	</CustomAppBar>
);

export default AppBar_SideDrawer_Standard;
