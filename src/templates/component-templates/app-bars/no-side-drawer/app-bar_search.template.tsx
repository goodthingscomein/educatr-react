import React from 'react';

// Custom Components
import CustomAppBar from '../../../../components/app-bar/app-bar.components';
import AppBarText from '../../../../components/app-bar-text/app-bar-text.components';
import CustomSearchBox from '../../../../components/search-box/search-box.components';

// Website consts
import WEBSITE from '../../../../assets/website.consts';

const AppBar_SideDrawer_Search: React.FC<{ appBar: true; supportsDrawer: false }> = () => (
	<CustomAppBar>
		<AppBarText variant='h6'>{WEBSITE.SITE_TITLE}</AppBarText>
		<CustomSearchBox />
	</CustomAppBar>
);

export default AppBar_SideDrawer_Search;
