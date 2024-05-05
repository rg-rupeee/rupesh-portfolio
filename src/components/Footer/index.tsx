'use client';

import Link from 'next/link';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import CodeIcon from '@mui/icons-material/Code';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  AccountLinks,
  ClosingLine,
  FooterContainer,
  FooterTitle,
  ScrollArrow,
} from './style';

const Accounts = () => {
  return (
    <AccountLinks>
      <Link href='/'>
        <WhatsAppIcon sx={{ fontSize: 25 }} />
      </Link>
      <Link href='/'>
        <LinkedInIcon sx={{ fontSize: 25 }} />
      </Link>
      <Link href='/'>
        <GitHubIcon sx={{ fontSize: 25 }} />
      </Link>
      <Link href='/'>
        <MailIcon sx={{ fontSize: 25 }} />
      </Link>
      <Link href='/'>
        <InstagramIcon sx={{ fontSize: 25 }} />
      </Link>
    </AccountLinks>
  );
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Rupesh Garhwal</FooterTitle>
      <Accounts />
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
