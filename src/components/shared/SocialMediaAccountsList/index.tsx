import Link from 'next/link';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { AccountLinks } from './style';
import { CSSObject } from '@emotion/react';

type SocialMediaAccountsListProps = {
  type?: 'col' | 'row';
  extraStyles?: CSSObject;
};

const SocialMediaAccountsList = ({
  type = 'row',
  extraStyles,
}: SocialMediaAccountsListProps) => {
  return (
    <AccountLinks type={type} extraStyles={extraStyles}>
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
export default SocialMediaAccountsList;
