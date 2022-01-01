import React from 'react';

// Import styles
import {HomepageContainer, AppBarButtonsContainer, AppBarTextButtonContainer} from './hompage.styles';

// Custom Components
import AppBar from '../../components/app-bar/app-bar.components';
import Logo from '../../components/logo/logo.components';
import Button from '../../components/button/button.components';
import {H1, H3} from '../../components/heading/heading.styles';
import Section from '../../components/section/section.components';
import CardList from '../../components/card-list/card-list.components';
import Card from '../../components/card/card.components';
import CardImage from '../../components/card-image/card-image.components';
import Column from '../../components/column/column.components';

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
      <Section imgUrl='https://images.unsplash.com/photo-1614030424754-24d0eebd46b2' imgDarken={0.6} isHeroSection>
        <H1 color='white'>Connecting like-minded influencers.</H1>
        <H3 color='primary'>It is a pleasure to see you!</H3>
      </Section>
      <Section backgroundColor='lightGrey'>
        <CardList>
          <Card height={300} width={220} backgroundColor='white'>
            <CardImage src='https://images.unsplash.com/photo-1614030424754-24d0eebd46b2' alt='Image' />
          </Card>
          <Card height={300} width={220} backgroundColor='white'></Card>
          <Card height={300} width={220} backgroundColor='white'></Card>
          <Card height={300} width={220} backgroundColor='white'></Card>
        </CardList>
      </Section>
      <Section backgroundColor='secondary'>
        <Column imgUrl='https://images.unsplash.com/photo-1614030424754-24d0eebd46b2' />
        <Column>
          <H3 color='white'>Col 2</H3>
        </Column>
      </Section>
    </HomepageContainer>
  );
};

export default Homepage;
