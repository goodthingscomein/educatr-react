import React from 'react';

// Import styles
import {HomepageContainer} from './hompage.styles';
import './homepage.styles.css';

// Custom Components
import AppBar from '../../components/app-bar/app-bar.components';
import Logo from '../../components/logo/logo.components';
import Button from '../../components/button/button.components';
import {H1} from '../../components/heading/heading.styles';
import Section from '../../components/section/section.components';
import Column from '../../components/column/column.components';
import Margin from '../../components/margin/margin.components';
import AppBarItemsContainer from '../../components/app-bar-items-container/app-bar-items-container.components';
import CopyText from '../../components/copy-text/copy-text.components';
import Link from '../../components/link/link.components';

// Homepage Functional Component
const Homepage: React.FC = () => {
  return (
    <HomepageContainer>
      {/* App Bar */}
      <AppBar color='transparent'>
        <AppBarItemsContainer>
          <Logo variant='h4' firstColor='white' secondColor='white' />
          <AppBarItemsContainer horizontalMargin={40}>
            <Link color='white' fontSize='small' underlineEffect='hover' horizontalMargin={16}>
              About
            </Link>
            <Link color='white' fontSize='small' underlineEffect='hover' horizontalMargin={16}>
              FAQS
            </Link>
            <Link color='white' fontSize='small' underlineEffect='hover' horizontalMargin={16}>
              Blog
            </Link>
            <Link color='white' fontSize='small' underlineEffect='hover' horizontalMargin={16}>
              Contact
            </Link>
          </AppBarItemsContainer>
        </AppBarItemsContainer>
        <AppBarItemsContainer>
          <AppBarItemsContainer horizontalMargin={8}>
            <Link color='white' fontSize='small' underlineEffect='hover' horizontalMargin={16} href='login'>
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
            href='signup'
          >
            Sign Up
          </Button>
        </AppBarItemsContainer>
      </AppBar>
      {/* Hero Section */}
      <Section backgroundColor='primary' isHeroSection hasColumns hasGradientBackground>
        <Column>
          <div className='custom-shape-divider-bottom-1641161177'></div>
        </Column>
        <Column>
          <H1 color='white'>
            Social is
            <br />
            your superpower.
          </H1>
          <CopyText color='white' size='large' fontWeight={300}>
            Easily manage all your social media and get results with Hootsuite.
          </CopyText>
          <Margin height={40} />
          <Button
            variant='solid'
            size='large'
            fontWeight={700}
            textColor='white'
            outlineColor='transparent'
            backgroundColor='primaryAccent'
            hoverBackgroundColor='secondaryAccent'
          >
            Start Your Free 30 Day Trial
          </Button>
          <Margin />
          <Link color='white' underlineEffect='hover'>
            Compare Plans
          </Link>
        </Column>
        <div className='custom-shape-divider-bottom-1641161177'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </Section>
    </HomepageContainer>
  );
};

export default Homepage;
