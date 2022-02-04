import React from 'react';

// Import badges
import { ReactComponent as AppStoreBadge } from '../../assets/images/branded-badges/app-store-badge.svg';
import PlayStoreBadge from '../../assets/images/branded-badges/google-play-badge.png';

// Import styles
import {
  FooterContentContainer,
  FooterLinkContainer,
  FooterButtonsContainer,
  BadgeListContainer,
  AppStoreBadgeContainer,
  PlayStoreBadgeContainer,
} from './footer-section.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';
import Margin from '../margin/margin.components';
import Section from '../section/section.components';
import Link from '../link/link.components';

// Render Component
const FooterSection: React.FC = () => (
  <Section backgroundColor='textDark' padding='60px 160px'>
    <FooterContentContainer>
      <FooterLinkContainer>
        <Link color='textLight' hoverColor='primary' fontSize='small' underlineEffect='never' margin='0 12px 0 0'>
          Legal
        </Link>
        <CopyText color='textLight' size='medium'>
          |
        </CopyText>
        <Link color='textLight' hoverColor='primary' fontSize='small' underlineEffect='never' margin='0 12px'>
          Privacy Policy
        </Link>
        <CopyText color='textLight' size='medium'>
          |
        </CopyText>
        <Link color='textLight' hoverColor='primary' fontSize='small' underlineEffect='never' margin='0 12px'>
          Terms and Conditions
        </Link>
      </FooterLinkContainer>
      <FooterButtonsContainer>
        {/* <Link color='white' hoverColor='twitter' fontSize='x-large' underlineEffect='never' margin='0 20px'>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link color='white' hoverColor='facebook' fontSize='x-large' underlineEffect='never' margin='0 20px'>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link color='white' hoverColor='youtube' fontSize='x-large' underlineEffect='never' margin='0 20px'>
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <Link color='white' hoverColor='instagram' fontSize='x-large' underlineEffect='never' margin='0 20px'>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link color='white' hoverColor='pinterest' fontSize='x-large' underlineEffect='never' margin='0 20px'>
          <FontAwesomeIcon icon={faPinterest} />
        </Link>
        <Link color='white' hoverColor='tiktok' fontSize='x-large' underlineEffect='never' margin='0 20px'>
          <FontAwesomeIcon icon={faTiktok} />
        </Link>
        <Link color='white' hoverColor='linkedin' fontSize='x-large' underlineEffect='never' margin='0 0.5rem 0 20px'>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link> */}
      </FooterButtonsContainer>
    </FooterContentContainer>
    <Margin height='24px' width='100%' />
    <FooterContentContainer>
      <CopyText color='white' fontWeight={300} size='medium'>
        © {new Date().getFullYear()} Datafluence Inc. All Rights Reserved.
      </CopyText>
      <BadgeListContainer>
        <AppStoreBadgeContainer href='#'>
          <AppStoreBadge />
        </AppStoreBadgeContainer>
        <PlayStoreBadgeContainer href='#'>
          <img src={PlayStoreBadge} />
        </PlayStoreBadgeContainer>
      </BadgeListContainer>
    </FooterContentContainer>
  </Section>
);

export default FooterSection;
