import React from 'react';
import { MainTheme } from '../../themes/main.theme';
import { Route, Routes } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setDrawerIsOpen } from '../../redux/navigation/navigation.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { ApplicationPageContainer, DrawerContainer, ContentContainer } from './application.styles';

// Import custom components
import Section from '../../components/section/section.components';
import Button from '../../components/button/button.components';
import AppBar from '../../components/app-bar/app-bar.components';
import AppBarItemsContainer from '../../components/app-bar-items-container/app-bar-items-container.components';
import Drawer from '../../components/drawer/drawer.components';
import DrawerButton from '../../components/drawer-button/drawer-button.components';
import Logo from '../../components/logo/logo.components';
import Icon from '../../components/icon/icon-components';
import DrawerSection from '../../components/drawer-section/drawer-section.components';
import Link from '../../components/link/link.components';
import Divider from '../../components/divider/divider.components';

// Import icons
import MenuIcon from '@mui/icons-material/Menu';
import AccountIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/HelpCenter';
import HomeIcon from '@mui/icons-material/Home';
import MessagesIcon from '@mui/icons-material/Chat';
import FindInfluencersIcon from '@mui/icons-material/ManageSearch';
import EngagementIcon from '@mui/icons-material/Favorite';
import DashboardIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';

// Import sub pages
import Application_HomePage from './sub-pages/home/home.pages';
import Application_MessagesPage from './sub-pages/messages/messages.pages';
import Application_FindInfluencersPage from './sub-pages/find-influencers/find-influencers.pages';
import Application_EngagementPage from './sub-pages/engagement/engagement.pages';
import Application_DashboardPage from './sub-pages/dashboard/dashboard.pages';
import Application_SettingsPage from './sub-pages/settings/settings.pages';
import Application_UserSettingsPage from './sub-pages/user-settings/user-settings.pages';

// Component Props Interface
type Props = {
	isDrawerOpen: boolean;
	setDrawerIsOpen: typeof setDrawerIsOpen;
};

// Render Component
const ApplicationPage: React.FC<Props> = ({ isDrawerOpen, setDrawerIsOpen }) => (
	<ApplicationPageContainer>
		<AppBar color='textDark' padding='0 40px 0 20px'>
			{/* LEFT SIDE OF APP BAR*/}
			<AppBarItemsContainer>
				<Button
					variant='text'
					padding='18px'
					textColor='white'
					hoverTextColor='primary'
					size='medium'
					clickAction={() => setDrawerIsOpen(!isDrawerOpen)}>
					<MenuIcon fontSize='medium' />
				</Button>
				<Logo variant='h4' firstColor='primary' secondColor='white' padding='0 0 0 20px' />
			</AppBarItemsContainer>
			{/* RIGHT SIDE OF APP BAR*/}
			<AppBarItemsContainer>
				<Button
					variant='text'
					padding='18px'
					margin='0 12px 0 0'
					textColor='white'
					hoverTextColor='primary'
					size='medium'>
					<HelpIcon fontSize='medium' />
				</Button>
				<Button
					variant='text'
					padding='18px'
					margin='0 16px 0 0'
					textColor='white'
					hoverTextColor='primary'
					size='medium'>
					<NotificationsIcon fontSize='medium' />
				</Button>
				<Button variant='text' padding='18px' textColor='white' hoverTextColor='primary' size='medium'>
					<AccountIcon fontSize='large' />
				</Button>
			</AppBarItemsContainer>
		</AppBar>
		<Section
			backgroundColor='lightGrey'
			padding='0'
			minHeight='100vh'
			hasGradientBackground
			gradientColor1='primary'
			gradientColor2='secondary'
			gradientColor3='tertiary'>
			<DrawerContainer>
				<Drawer padding={`${MainTheme.appBar.appBarHeight} 0 16px 0`}>
					<DrawerSection backgroundColor='transparent'>
						<DrawerButton textColor='white' hoverTextColor='primary' fontWeight={300} href='/app'>
							<Icon padding='24px 10px' margin={isDrawerOpen ? '0 16px 0 0' : ''}>
								<HomeIcon fontSize='medium' />
							</Icon>
							{isDrawerOpen ? 'Home' : ''}
						</DrawerButton>
						<DrawerButton textColor='white' hoverTextColor='primary' fontWeight={300} href='/app/messages'>
							<Icon padding='24px 10px' margin={isDrawerOpen ? '0 16px 0 0' : ''}>
								<MessagesIcon fontSize='medium' />
							</Icon>
							{isDrawerOpen ? 'Messages' : ''}
						</DrawerButton>
						<DrawerButton textColor='white' hoverTextColor='primary' fontWeight={300} href='/app/find-influencers'>
							<Icon padding='24px 10px' margin={isDrawerOpen ? '0 16px 0 0' : ''}>
								<FindInfluencersIcon fontSize='medium' />
							</Icon>
							{isDrawerOpen ? 'Find Influencers' : ''}
						</DrawerButton>
						<DrawerButton textColor='white' hoverTextColor='primary' fontWeight={300} href='/app/engagement'>
							<Icon padding='24px 10px' margin={isDrawerOpen ? '0 16px 0 0' : ''}>
								<EngagementIcon fontSize='medium' />
							</Icon>
							{isDrawerOpen ? 'Engagement' : ''}
						</DrawerButton>
						<DrawerButton textColor='white' hoverTextColor='primary' fontWeight={300} href='/app/dashboard'>
							<Icon padding='24px 10px' margin={isDrawerOpen ? '0 16px 0 0' : ''}>
								<DashboardIcon fontSize='medium' />
							</Icon>
							{isDrawerOpen ? 'Dashboard' : ''}
						</DrawerButton>
						<DrawerButton textColor='white' hoverTextColor='primary' fontWeight={300} href='/app/settings'>
							<Icon padding='24px 10px' margin={isDrawerOpen ? '0 16px 0 0' : ''}>
								<SettingsIcon fontSize='medium' />
							</Icon>
							{isDrawerOpen ? 'Settings' : ''}
						</DrawerButton>
					</DrawerSection>
					<DrawerSection backgroundColor='transparent'>
						{isDrawerOpen ? (
							<>
								<Divider color='light' />
								<DrawerSection
									backgroundColor='transparent'
									flexDirection='column'
									alignItems='flex-start'
									padding='0 24px'>
									{isDrawerOpen ? (
										<>
											<Link color='textLight' hoverColor='primary' fontSize='small' fontWeight={300}>
												Legal Center
											</Link>
											<Link color='textLight' hoverColor='primary' fontSize='small' fontWeight={300}>
												Privacy Policy
											</Link>
											<Link color='textLight' hoverColor='primary' fontSize='small' fontWeight={300}>
												Terms and Conditions
											</Link>
											<Link color='textLight' hoverColor='primary' fontSize='small' fontWeight={300}>
												Contact Us
											</Link>
										</>
									) : (
										''
									)}
								</DrawerSection>
							</>
						) : (
							''
						)}
					</DrawerSection>
				</Drawer>
				{/* SUB PAGE ROUTES GO HERE*/}
				<ContentContainer>
					<Routes>
						<Route path='/' element={<Application_HomePage />} />
						<Route path='messages' element={<Application_MessagesPage />} />
						<Route path='find-influencers' element={<Application_FindInfluencersPage />} />
						<Route path='engagement' element={<Application_EngagementPage />} />
						<Route path='dashboard' element={<Application_DashboardPage />} />
						<Route path='settings' element={<Application_SettingsPage />} />
						<Route path='user-settings' element={<Application_UserSettingsPage />} />
					</Routes>
				</ContentContainer>
			</DrawerContainer>
		</Section>
	</ApplicationPageContainer>
);

const mapStateToProps = (state: State) => ({
	isDrawerOpen: state.navigation.isDrawerOpen,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	setDrawerIsOpen: (open: boolean) => dispatch(setDrawerIsOpen(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationPage);
