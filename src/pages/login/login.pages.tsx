import React from 'react';

// Import styles
import { LoginPageContainer, SignUpText } from './login.styles';

// Import custom components
import AppBar from '../../components/app-bar/app-bar.components';
import Button from '../../components/button/button.components';
import Card from '../../components/card/card.components';
import Column from '../../components/column/column.components';
import CopyText from '../../components/copy-text/copy-text.components';
import { H4 } from '../../components/heading/heading.styles';
import Input from '../../components/input/input.components';
import Link from '../../components/link/link.components';
import Logo from '../../components/logo/logo.components';
import Margin from '../../components/margin/margin.components';
import Section from '../../components/section/section.components';

// Import SVGs
import { ReactComponent as LoginHeroImage } from '../../assets/images/login/login-orange.svg';
import SvgContainer from '../../components/svg-container/svg-container.components';

// Render Component
const LoginPage: React.FC = () => (
	<LoginPageContainer>
		<AppBar color='transparent'>
			<Logo variant='h4' firstColor='white' secondColor='white' href='/'></Logo>
		</AppBar>
		<Section
			backgroundColor='primary'
			hasColumns
			padding='0'
			minHeight='100vh'
			hasGradientBackground
			gradientColor1='primaryAccent'
			gradientColor2='secondaryAccent'
			gradientColor3='tertiaryAccent'>
			<Column>
				<Card>
					<H4 color='textDark'>Log in</H4>
					<Margin height={4} />
					<CopyText color='textLight' size={'medium'} fontWeight={200}>
						Continue to Datafluence
					</CopyText>
					<Margin height={40} />
					<Input type='email' label='Email' inputId='email' />
					<Input type='password' label='Password' inputId='password' hasPassword />
					<Margin height={12} />
					<Button
						variant='solid'
						size='x-large'
						maxWidth
						backgroundColor='primary'
						hoverBackgroundColor='secondary'
						textColor='white'>
						Log in
					</Button>
					<Margin />
					<SignUpText>
						<CopyText size={'small'} fontWeight={300} color={'textLight'}>
							New to Datafluence?
						</CopyText>
						<Link
							fontSize='small'
							fontWeight={300}
							color='primaryAccent'
							hoverColor='tertiaryAccent'
							underlineEffect='never'
							href='signup'
							margin='0 4px'>
							Get started
						</Link>
					</SignUpText>
				</Card>
			</Column>
			<Column>
				<SvgContainer scalePercent={75} posTranslate='-10%, 20%'>
					<LoginHeroImage />
				</SvgContainer>
			</Column>
		</Section>
	</LoginPageContainer>
);

export default LoginPage;
