import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import styles
import { ApplicationPageContainer, ContentContainer } from './application.styles';

// Import custom components
import Section from '../../components/section/section.components';
import AppBar from '../../components/app-bar/app-bar.components';
import Drawer from '../../components/drawer/drawer.components';

// Import sub pages
import HomePage from '../home/home.pages';
import MessagesPage from '../messages/messages.pages';

// Render Component
const ApplicationPage: React.FC = () => (
	<ApplicationPageContainer>
		<AppBar />
		<Drawer />
		<Section backgroundColor='lightGrey' padding='0' minHeight='100vh'>
			{/* MAIN CONTENT */}
			<ContentContainer>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/messages' element={<MessagesPage />} />
				</Routes>
			</ContentContainer>
		</Section>
	</ApplicationPageContainer>
);

export default ApplicationPage;
