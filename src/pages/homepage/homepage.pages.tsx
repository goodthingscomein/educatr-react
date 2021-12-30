import React from 'react';

// Import styles
import {HomepageContainer, AppBarButtonsContainer, AppBarTextButtonContainer} from './hompage.styles';

// Custom Components
import AppBar from '../../components/app-bar/app-bar.components';
import Logo from '../../components/logo/logo.components';
import Button from '../../components/button/button.components';
import HeroSection from '../../components/hero-section/hero-section.components';
import {H1, H3} from '../../components/heading/heading.styles';

// Homepage Functional Component
const Homepage: React.FC = () => {
  return (
    <HomepageContainer>
      <AppBar color='textDark'>
        <Logo variant='h4' firstColor='primary' secondColor='white' />
        <AppBarButtonsContainer>
          <AppBarTextButtonContainer>
            <Button variant='text' size='small' textColor='white' hoverTextColor='primary' activeTextColor='accent'>
              About
            </Button>
            <Button variant='text' size='small' textColor='white' hoverTextColor='primary' activeTextColor='accent'>
              FAQS
            </Button>
            <Button variant='text' size='small' textColor='white' hoverTextColor='primary' activeTextColor='accent'>
              Blog
            </Button>
            <Button variant='text' size='small' textColor='white' hoverTextColor='primary' activeTextColor='accent'>
              Contact
            </Button>
          </AppBarTextButtonContainer>
          <Button
            variant='solid'
            size='small'
            textColor='white'
            hoverTextColor='primary'
            activeTextColor='accent'
            backgroundColor='primary'
            hoverBackgroundColor='transparent'
            activeBackgroundColor='transparent'
            outlineColor='primary'
            hoverOutlineColor='primary'
            activeOutlineColor='accent'
          >
            Create Account
          </Button>
        </AppBarButtonsContainer>
      </AppBar>
      <HeroSection imgUrl='https://images.unsplash.com/photo-1614030424754-24d0eebd46b2' imgDarken={0.6}>
        <H1 color='white'>Connecting like-minded influencers.</H1>
        <H3 color='primary'>It is a pleasure to see you!</H3>
      </HeroSection>
    </HomepageContainer>
  );
};

export default Homepage;
