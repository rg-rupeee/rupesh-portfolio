import SectionHeading from '@/components/shared/SectionHeading';
import Image from 'next/image';
import { AboutContainer } from './style';
import SectionTitle from '../Resume/Title';
import Link from 'next/link';

const subtitle = 'Get to know me';
const title = 'About Me';

const About = () => {
  return (
    <AboutContainer id='about'>
      <Image
        src='/profile.jpeg'
        alt='Rupesh Garhwal'
        width={500}
        height={500}
      />
      <section>
        <h4>Hi, I&apos;m Rupesh Garhwal</h4>
        <p>I am working as a Software Developer at Bajaj Finserv Health 🧑‍💻.</p>
        <p>
          I turn vision into reality with code. Equipped with a diverse
          technical arsenal and a passion for tackling intricate engineering
          challenges 🚀
        </p>
        <p>
          Do checkout my latest projects on{' '}
          <Link href='https://github.com/rg-rupeee'>Github</Link>. Let&apos;s
          connect and explore opportunities in the exciting world of software
          development 🌐
        </p>
        <p>I hail from Indore, but I currently reside in Pune, India ❤️</p>
      </section>
    </AboutContainer>
  );
};

export default About;
