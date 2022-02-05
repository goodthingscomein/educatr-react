import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import styles
import { PageContainer, PageButtonsContainer } from './home.styles';

// Import custom components
import Button from '../../components/button/button.components';
import HeadingText from '../../components/heading-text/heading-text.components';
import Margin from '../../components/margin/margin.components';

// Render Component
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <HeadingText variant='h1' color='textDark'>
        Welcome to the platform
      </HeadingText>
      <HeadingText variant='h5' color='textDark'>
        You have successfully logged in to reach this page.
      </HeadingText>
      <Margin height='40px' width='100%' />
      <PageButtonsContainer>
        <Button
          variant='solid'
          size='large'
          backgroundColor='primary'
          hoverBackgroundColor='secondary'
          textColor='white'
          fontWeight={700}
          margin='0 20px'
          minWidth='10%'
          clickAction={() => navigate('/login')}
        >
          Login
        </Button>
        <Button
          variant='solid'
          size='large'
          backgroundColor='primary'
          hoverBackgroundColor='secondary'
          textColor='white'
          fontWeight={700}
          margin='0 20px'
          minWidth='10%'
          clickAction={() => navigate('/signup')}
        >
          Sign Up
        </Button>
      </PageButtonsContainer>
    </PageContainer>
  );
};

export default HomePage;
