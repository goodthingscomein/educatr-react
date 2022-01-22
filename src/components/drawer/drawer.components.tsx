import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MainTheme } from '../../themes/main.theme';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';

// Import styles
import { DrawerContainer } from './drawer.styles';

// Import custom icons
import HomeIcon from '@mui/icons-material/Home';
import CalendarIcon from '@mui/icons-material/TodayOutlined';
import MessagesIcon from '@mui/icons-material/Chat';
import ResourcesIcon from '@mui/icons-material/MenuBookOutlined';
import ClassesIcon from '@mui/icons-material/FeaturedVideoOutlined';
import UnitsIcon from '@mui/icons-material/SchoolOutlined';
import GradesIcon from '@mui/icons-material/BarChartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

// Import custom components
import DrawerSection from '../drawer-section/drawer-section.components';
import DrawerButton from '../drawer-button/drawer-button.components';
import Icon from '../icon/icon-components';
import Divider from '../divider/divider.components';
import Link from '../link/link.components';

type Props = {
	isDrawerOpen: boolean;
};

const Drawer: React.FC<Props> = ({ isDrawerOpen }) => {
	const navigate = useNavigate();
	return (
		<DrawerContainer padding={`${MainTheme.appBar.appBarHeight} 0 16px 0`} isDrawerOpen={isDrawerOpen}>
			<DrawerSection backgroundColor='transparent'>
				<DrawerButton
					textColor='white'
					hoverTextColor='primaryAccent'
					fontWeight={300}
					selected={useLocation().pathname === '/'}
					clickAction={() => navigate('/')}>
					<Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
						<HomeIcon fontSize='medium' />
					</Icon>
					{isDrawerOpen ? 'Home' : ''}
				</DrawerButton>
				<DrawerButton
					textColor='white'
					hoverTextColor='primaryAccent'
					fontWeight={300}
					selected={useLocation().pathname === '/calendar'}
					clickAction={() => navigate('/calendar')}>
					<Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
						<CalendarIcon fontSize='medium' />
					</Icon>
					{isDrawerOpen ? 'Calendar' : ''}
				</DrawerButton>
				<DrawerButton
					textColor='white'
					hoverTextColor='primaryAccent'
					fontWeight={300}
					selected={useLocation().pathname === '/messages'}
					clickAction={() => navigate('/messages')}>
					<Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
						<MessagesIcon fontSize='medium' />
					</Icon>
					{isDrawerOpen ? 'Messages' : ''}
				</DrawerButton>
				<DrawerButton
					textColor='white'
					hoverTextColor='primaryAccent'
					fontWeight={300}
					selected={useLocation().pathname === '/resources'}
					clickAction={() => navigate('/resources')}>
					<Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
						<ResourcesIcon fontSize='medium' />
					</Icon>
					{isDrawerOpen ? 'Resources' : ''}
				</DrawerButton>
				<DrawerButton
					textColor='white'
					hoverTextColor='primaryAccent'
					fontWeight={300}
					selected={useLocation().pathname === '/classes'}
					clickAction={() => navigate('/classes')}>
					<Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
						<ClassesIcon fontSize='medium' />
					</Icon>
					{isDrawerOpen ? 'Your Classes' : ''}
				</DrawerButton>
				<DrawerButton
					textColor='white'
					hoverTextColor='primaryAccent'
					fontWeight={300}
					selected={useLocation().pathname === '/units'}
					clickAction={() => navigate('/units')}>
					<Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
						<UnitsIcon fontSize='medium' />
					</Icon>
					{isDrawerOpen ? 'Your Units' : ''}
				</DrawerButton>
				<DrawerButton
					textColor='white'
					hoverTextColor='primaryAccent'
					fontWeight={300}
					selected={useLocation().pathname === '/grades'}
					clickAction={() => navigate('/grades')}>
					<Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
						<GradesIcon fontSize='medium' />
					</Icon>
					{isDrawerOpen ? 'Your Grades' : ''}
				</DrawerButton>
				<DrawerButton
					textColor='white'
					hoverTextColor='primaryAccent'
					fontWeight={300}
					selected={useLocation().pathname === '/settings'}
					clickAction={() => navigate('/settings')}>
					<Icon padding='24px 10px' margin={isDrawerOpen ? '0 24px 0 0' : ''}>
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
									<Link color='white' hoverColor='primaryAccent' fontSize='small' fontWeight={300}>
										Legal Center
									</Link>
									<Link color='white' hoverColor='primaryAccent' fontSize='small' fontWeight={300}>
										Privacy Policy
									</Link>
									<Link color='white' hoverColor='primaryAccent' fontSize='small' fontWeight={300}>
										Terms and Conditions
									</Link>
									<Link color='white' hoverColor='primaryAccent' fontSize='small' fontWeight={300}>
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
		</DrawerContainer>
	);
};

const mapStateToProps = (state: State) => ({
	isDrawerOpen: state.navigation.isDrawerOpen,
});

export default connect(mapStateToProps)(Drawer);
