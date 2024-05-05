'use client';

import SocialMediaAccountsList from '@/components/shared/SocialMediaAccountsList';
import { AccountsListCSS, HeroSectionWrapper } from './style';

const Hero = () => {
  return (
    <HeroSectionWrapper>
      <h1 className='title'>Rupesh Garhwal</h1>
      <h2 className='subtitle'>Frontend Hobbyist! Backend Professionalist!</h2>
      <h5 className='description'>
        Hi, I am Rupesh Garhwal, I love developing scalable backend solutions.
      </h5>
      <SocialMediaAccountsList type='col' extraStyles={AccountsListCSS} />
    </HeroSectionWrapper>
  );
};

export default Hero;
