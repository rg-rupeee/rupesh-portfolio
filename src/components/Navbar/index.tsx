'use client';

import Link from 'next/link';

import { Logo, NavContainer, NavItem, NavList } from './styles';

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>LOGO</Logo>
      <NavList className='nav-list'>
        <NavItem>
          <Link href='/'>LOGO</Link>
        </NavItem>
        <NavItem>
          <Link href='/'>HOME</Link>
        </NavItem>
        <NavItem>
          <Link href='/'>ABOUT</Link>
        </NavItem>
        <NavItem>
          <Link href='/'>CONTACT</Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
