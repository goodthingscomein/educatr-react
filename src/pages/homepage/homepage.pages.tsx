import React from 'react';

// Import Redux
import { connect } from 'react-redux';
import { setDrawerIsOpen } from '../../services/redux/navigation/navigation.actions';

// Import Material UI Components
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Import Custom Components
import CustomAppBar from '../../components/app-bar/app-bar.components';
import AppBarButton from '../../components/app-bar-button/app-bar-button.components';
import CustomSearchBox from '../../components/search-box/search-box.components';
import AppBarText from '../../components/app-bar-text/app-bar-text.components';
import SideNavDrawer from '../../components/side-nav-drawer/side-nav-drawer.components';

// Import Website Constants
import WEBSITE from '../../assets/website.consts';
import { Dispatch } from 'redux';

type Props = {
	setDrawerIsOpen: (open: boolean) => void;
};

const Homepage: React.FC<Props> = ({ setDrawerIsOpen }) => (
	<React.Fragment>
		<CustomAppBar>
			<AppBarButton size='large' edge='start' onClickAction={() => setDrawerIsOpen(true)}>
				<MenuIcon />
			</AppBarButton>
			<AppBarText variant='h6'>{WEBSITE.SITE_TITLE}</AppBarText>
			<CustomSearchBox />
		</CustomAppBar>
		<SideNavDrawer drawerWidth={250}>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</SideNavDrawer>
	</React.Fragment>
);

// Set props
const mapDispatchToProps = (dispatch: Dispatch) => ({
	setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
});

export default connect(null, mapDispatchToProps)(Homepage);
