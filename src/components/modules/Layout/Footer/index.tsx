'use client';

import Link from 'next/link';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import SocialMediaAccountsList from '@/components/shared/SocialMediaAccountsList';

import {
  ClosingLine,
  FooterContainer,
  FooterTitle,
  ScrollArrow,
} from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Rupesh Garhwal</FooterTitle>
      <SocialMediaAccountsList />
      <ScrollArrow>
        <Link href='/'>
          <ArrowUpwardIcon sx={{ fontSize: 30 }} />
        </Link>
      </ScrollArrow>
      <ClosingLine>Made with ❤️ by Rupesh Garhwal</ClosingLine>
    </FooterContainer>
  );
};

export default Footer;
