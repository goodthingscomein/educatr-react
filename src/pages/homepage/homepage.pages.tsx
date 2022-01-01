import React from 'react';

// Import styles
import {HomepageContainer, AppBarButtonsContainer, AppBarTextButtonContainer} from './hompage.styles';

// Custom Components
import AppBar from '../../components/app-bar/app-bar.components';
import Logo from '../../components/logo/logo.components';
import Button from '../../components/button/button.components';
import {H1, H2, H3} from '../../components/heading/heading.styles';
import Section from '../../components/section/section.components';
import CardList from '../../components/card-list/card-list.components';
import Card from '../../components/card/card.components';
import Column from '../../components/column/column.components';
import Margin from '../../components/margin/margin.components';

// Homepage Functional Component
const Homepage: React.FC = () => {
  return (
    <HomepageContainer>
      {/* App Bar */}
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
      {/* Hero Section */}
      <Section backgroundColor='white' isHeroSection hasColumns hasBoxShadow>
        <Column />
        <Column>
          <H1 color='textDark'>Connecting like-minded influencers.</H1>
          <H3 color='primary'>It is a pleasure to see you!</H3>
        </Column>
      </Section>
      {/* Card Section */}
      <Section backgroundColor='lightGrey' horizontalPadding={220} verticalPadding={80}>
        <H2 color='primary'>Card Section</H2>
        <Margin height={40} />
        <CardList>
          <Card height={360} width={270} backgroundColor='white'></Card>
          <Card height={360} width={270} backgroundColor='white'></Card>
          <Card height={360} width={270} backgroundColor='white'></Card>
        </CardList>
      </Section>
      {/* Column Section */}
      <Section backgroundColor='secondary' hasColumns>
        <Column imgUrl='https://images.unsplash.com/photo-1614030424754-24d0eebd46b2' />
        <Column>
          <H3 color='white'>Col 2</H3>
        </Column>
      </Section>
    </HomepageContainer>
  );
};

export default Homepage;
