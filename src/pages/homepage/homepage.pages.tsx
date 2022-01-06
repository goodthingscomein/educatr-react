import React from 'react';

// Import styles
import { HomepageContainer } from './hompage.styles';

// Import custom components
import AppBar from '../../components/app-bar/app-bar.components';
import Logo from '../../components/logo/logo.components';
import Button from '../../components/button/button.components';
import { H1, H2, H3 } from '../../components/heading/heading.styles';
import Section from '../../components/section/section.components';
import Column from '../../components/column/column.components';
import Margin from '../../components/margin/margin.components';
import AppBarItemsContainer from '../../components/app-bar-items-container/app-bar-items-container.components';
import CopyText from '../../components/copy-text/copy-text.components';
import Link from '../../components/link/link.components';
import BottomShapeDivider from '../../components/bottom-shape-divider/bottom-shape-divider.components';

// Import SVGs
import { ReactComponent as HeroImage } from '../../assets/images/landing-page/hero-image-blue.svg';
import { ReactComponent as HeroShapeDivider } from '../../assets/images/landing-page/hero-divider.svg';
import { ReactComponent as LandingImage1 } from '../../assets/images/landing-page/landing-1.svg';
import { ReactComponent as LandingImage2 } from '../../assets/images/landing-page/landing-2.svg';
import { ReactComponent as LandingImage3 } from '../../assets/images/landing-page/landing-3.svg';
import { ReactComponent as LandingImage4 } from '../../assets/images/landing-page/landing-4.svg';
import { ReactComponent as LandingImage5 } from '../../assets/images/landing-page/landing-5.svg';
import FooterSection from '../../components/footer-section/footer-section.components';
import SvgContainer from '../../components/svg-container/svg-container.components';

// Homepage Functional Component
const Homepage: React.FC = () => {
	return (
		<HomepageContainer>
			{/* App Bar */}
			<AppBar color='transparent'>
				<AppBarItemsContainer>
					<Logo variant='h4' firstColor='white' secondColor='white' />
					<AppBarItemsContainer horizontalMargin={40}>
						<Link color='white' fontSize='small' fontWeight={700} underlineEffect='hover' margin='0 16px'>
							About
						</Link>
						<Link color='white' fontSize='small' fontWeight={700} underlineEffect='hover' margin='0 16px'>
							FAQS
						</Link>
						<Link color='white' fontSize='small' fontWeight={700} underlineEffect='hover' margin='0 16px'>
							Blog
						</Link>
						<Link color='white' fontSize='small' fontWeight={700} underlineEffect='hover' margin='0 16px'>
							Contact
						</Link>
					</AppBarItemsContainer>
				</AppBarItemsContainer>
				<AppBarItemsContainer>
					<AppBarItemsContainer horizontalMargin={8}>
						<Link color='white' fontSize='small' fontWeight={700} underlineEffect='hover' margin='0 16px' href='login'>
							Log In
						</Link>
					</AppBarItemsContainer>
					<Button
						variant='solid'
						size='small'
						textColor='white'
						hoverTextColor='textDark'
						backgroundColor='transparent'
						hoverBackgroundColor='white'
						outlineColor='white'
						horizontalPadding={30}
						href='signup'>
						Sign Up
					</Button>
				</AppBarItemsContainer>
			</AppBar>
			{/* Hero Section */}
			<Section backgroundColor='primary' isHeroSection hasColumns hasGradientBackground>
				<Column overflow='visible'>
					<SvgContainer scalePercent={120} posTranslate='-15%, 10%'>
						<HeroImage />
					</SvgContainer>
				</Column>
				<Column>
					<H1 color='white'>Social is your superpower.</H1>
					<CopyText color='white' size='large' fontWeight={300}>
						Easily manage all your social media and get results with Hootsuite.
					</CopyText>
					<Margin height={48} />
					<Button
						variant='solid'
						size='large'
						fontWeight={700}
						textColor='white'
						outlineColor='transparent'
						backgroundColor='primaryAccent'
						hoverBackgroundColor='secondaryAccent'>
						Sign Up Today For Free
					</Button>
					<Margin height={12} />
					<Link color='white' underlineEffect='hover'>
						Compare Plans
					</Link>
				</Column>
				<BottomShapeDivider shapeColor='white'>
					<HeroShapeDivider />
				</BottomShapeDivider>
			</Section>
			<Margin height={40} />
			{/* 2 COLUMN SECTIONS */}
			<Section backgroundColor='white' hasColumns padding='80px 15%'>
				<Column>
					<H3 color='textDark'>Meet like-minded influencers.</H3>
					<CopyText color='textLight' fontWeight={200} size='x-large'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</CopyText>
				</Column>
				<Column overflow='visible'>
					<SvgContainer scalePercent={70} posTranslate='-5%, -55%'>
						<LandingImage1 />
					</SvgContainer>
				</Column>
			</Section>
			<Section backgroundColor='white' hasColumns padding='80px 15%'>
				<Column overflow='visible'>
					<SvgContainer scalePercent={90} posTranslate='-3%, -30%'>
						<LandingImage2 />
					</SvgContainer>
				</Column>
				<Column>
					<H3 color='textDark'>Plan your next collaboration.</H3>
					<CopyText color='textLight' fontWeight={200} size='x-large'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</CopyText>
				</Column>
			</Section>
			<Section backgroundColor='white' hasColumns padding='80px 15%'>
				<Column>
					<H3 color='textDark'>Engagement groups on steroids...</H3>
					<CopyText color='textLight' fontWeight={200} size='x-large'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</CopyText>
				</Column>
				<Column overflow='visible'>
					<SvgContainer scalePercent={80} posTranslate='-3%, -45%'>
						<LandingImage3 />
					</SvgContainer>
				</Column>
			</Section>
			<Section backgroundColor='white' hasColumns padding='80px 15%'>
				<Column overflow='visible'>
					<SvgContainer scalePercent={90} posTranslate='-3%, -30%'>
						<LandingImage4 />
					</SvgContainer>
				</Column>
				<Column>
					<H3 color='textDark'>Find trends your fans love.</H3>
					<CopyText color='textLight' fontWeight={200} size='x-large'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</CopyText>
				</Column>
			</Section>
			<Section backgroundColor='white' hasColumns padding='80px 15% 120px 15%'>
				<Column>
					<H3 color='textDark'>All analytics in one place.</H3>
					<CopyText color='textLight' fontWeight={200} size='x-large'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</CopyText>
				</Column>
				<Column overflow='visible'>
					<SvgContainer scalePercent={80} posTranslate='-2%, -40%'>
						<LandingImage5 />
					</SvgContainer>
				</Column>
			</Section>
			{/* SINGLE COLUMN SECTION */}
			<Section
				backgroundColor='secondary'
				padding='80px 15% 120px 15%'
				hasGradientBackground
				gradientColor1='primaryAccent'
				gradientColor2='secondaryAccent'
				gradientColor3='secondaryAccent'>
				<Margin />
				<H2 color='white'>Take your influencer journey to the next level.</H2>
				<Button
					variant='solid'
					size='x-large'
					fontWeight={700}
					backgroundColor='transparent'
					hoverBackgroundColor='white'
					textColor='white'
					hoverTextColor='textDark'
					outlineColor='white'>
					Sign Up Today For Free
				</Button>
			</Section>
			{/* FOOTER SECTION */}
			<FooterSection />
		</HomepageContainer>
	);
};

export default Homepage;
