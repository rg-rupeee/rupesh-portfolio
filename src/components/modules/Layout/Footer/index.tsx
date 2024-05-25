'use client';

import SocialMediaAccountsList from '@/components/shared/SocialMediaAccountsList';

import { ClosingLine, FooterContainer, FooterTitle } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Rupesh Garhwal</FooterTitle>
      <SocialMediaAccountsList />
      <ClosingLine>Made with ❤️ by Rupesh Garhwal</ClosingLine>
    </FooterContainer>
  );
};

export default Footer;
