'use client';

import Link from 'next/link';

import { Logo, NavContainer, NavItem, NavList } from './styles';
import Image from 'next/image';

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <Image src='/logo.png' width={70} height={70} alt='logo' />
      </Logo>
      <NavList className='nav-list'>
        <NavItem>
          <Link href='/'>HOME</Link>
        </NavItem>
        <NavItem>
          <Link href='#about'>ABOUT</Link>
        </NavItem>
        <NavItem>
          <Link href='#experience'>EXPERIENCE</Link>
        </NavItem>
        <NavItem>
          <Link href='#education'>EDUCATION</Link>
        </NavItem>
        <NavItem>
          <Link href='#contact'>CONTACT</Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
