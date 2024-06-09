'use client';

import SocialMediaAccountsList from '@/components/shared/SocialMediaAccountsList';
import { AccountsListCSS, HeroSectionWrapper } from './style';
import Link from 'next/link';

const Hero = () => {
  return (
    <HeroSectionWrapper id='home'>
      <h1 className='title'>Rupesh Garhwal</h1>
      <h2 className='subtitle'>
        Frontend Hobbyist! <br />
        Backend Professionalist!
      </h2>
      <h5 className='description'>
        I am a Software Developer who loves developing efficient and scalable
        systems.
      </h5>
      <div className='cta-section'>
        <Link href='/'>Contact Me</Link>
        <Link href='/'>Download CV</Link>
      </div>
      <SocialMediaAccountsList type='col' extraStyles={AccountsListCSS} />
    </HeroSectionWrapper>
  );
};

export default Hero;
