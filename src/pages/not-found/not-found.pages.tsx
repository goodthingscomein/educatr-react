import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import styles
import { PageContainer, ButtonsContainer } from './not-found.styles';

// Import custom components
import Button from '../../components/button/button.components';
import HeadingText from '../../components/heading/heading.components';
import Margin from '../../components/margin/margin.components';
import CopyText from '../../components/copy-text/copy-text.components';

// Render Component
const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <HeadingText variant='h1' color='textDark'>
        404 Page not found...
      </HeadingText>
      <Margin height='24px' width='100%' />
      <CopyText size='medium' color='textDark'>
        Ahhh yes... A classic 404 error! You have 2 options, choose wisely...
      </CopyText>
      <Margin height='28px' width='100%' />
      <ButtonsContainer>
        <Button
          variant='solid'
          size='large'
          textColor='white'
          backgroundColor='primary'
          hoverBackgroundColor='errorDark'
          fontWeight={400}
          padding='6px 0'
          margin='0 20px'
          minWidth='140px'
          clickAction={() => navigate('/login')}
        >
          Go Back
        </Button>
        <Button
          variant='solid'
          size='large'
          backgroundColor='primary'
          hoverBackgroundColor='infoDark'
          textColor='white'
          fontWeight={400}
          padding='6px 0'
          margin='0 20px'
          minWidth='140px'
          clickAction={() => navigate('/signup')}
        >
          Go Home
        </Button>
      </ButtonsContainer>
    </PageContainer>
  );
};

export default NotFoundPage;
