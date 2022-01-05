import React from 'react';

// Import styles
import {LoginText, SignUpPageContainer} from './sign-up.styles';

// Import components
import AppBar from '../../components/app-bar/app-bar.components';
import Column from '../../components/column/column.components';
import Logo from '../../components/logo/logo.components';
import Section from '../../components/section/section.components';
import Input from '../../components/input/input.components';
import Card from '../../components/card/card.components';
import Margin from '../../components/margin/margin.components';
import {H4} from '../../components/heading/heading.styles';
import CopyText from '../../components/copy-text/copy-text.components';
import Button from '../../components/button/button.components';
import Link from '../../components/link/link.components';

// Import SVGs
import {ReactComponent as SignUpHeroImage} from '../../assets/sign-up-orange.svg';

// Render Component
const SignUpPage: React.FC = () => (
  <SignUpPageContainer>
    <AppBar color='transparent'>
      <Logo variant='h4' firstColor='white' secondColor='white' href='/'></Logo>
    </AppBar>
    <Section
      backgroundColor='primary'
      hasColumns
      horizontalPadding={0}
      verticalPadding={0}
      minHeight='fit-content'
      hasGradientBackground
      gradientColor1='primaryAccent'
      gradientColor2='secondaryAccent'
      gradientColor3='tertiaryAccent'
    >
      <Column>
        <Card height={600}>
          <H4 color='textDark'>Sign up</H4>
          <Margin height={4} />
          <CopyText color='textLight' size={'medium'} fontWeight={200}>
            Continue to Datafluence
          </CopyText>
          <Margin height={28} />
          <Input type='email' label='Email' inputId='email' />
          <Input type='password' label='Password' inputId='password' hasPassword />
          <Input type='password' label='Confirm Password' inputId='confirmPassword' hasPassword />
          <Margin height={12} />
          <Button
            variant='solid'
            size='x-large'
            maxWidth
            backgroundColor='primary'
            hoverBackgroundColor='secondary'
            textColor='white'
          >
            Sign up
          </Button>
          <Margin />
          <LoginText>
            <CopyText size={'small'} fontWeight={300} color={'textLight'}>
              Already have an account?
            </CopyText>
            <p> </p>
            <Link
              fontSize='small'
              fontWeight={300}
              color='primaryAccent'
              hoverColor='tertiaryAccent'
              underlineEffect='never'
              href='login'
              horizontalMargin={4}
            >
              Log in
            </Link>
          </LoginText>
        </Card>
      </Column>
      <Column>
        <SignUpHeroImage />
      </Column>
    </Section>
  </SignUpPageContainer>
);

export default SignUpPage;
