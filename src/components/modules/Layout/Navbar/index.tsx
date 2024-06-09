'use client';

import Link from 'next/link';

import {
  HamburgerIcon,
  HamburgerMenu,
  Logo,
  NavContainer,
  NavItem,
  NavList,
} from './styles';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <Logo>
          <Image src='/logo.png' width={70} height={70} alt='logo' />
        </Logo>
        <HamburgerIcon>
          <MenuIcon />
        </HamburgerIcon>
        <NavList className='nav-list'>
          <NavItem active={true}>
            <Link href='#home'>HOME</Link>
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
      <HamburgerMenu>
        <ul className='menu'>
          <li className='menu-items'>
            <Link href='#home'>HOME</Link>
          </li>
          <li className='menu-items'>
            <Link href='#home'>ABOUT</Link>
          </li>
          <li className='menu-items'>
            <Link href='#home'>EXPERIENCE</Link>
          </li>
          <li className='menu-items'>
            <Link href='#home'>EDUCATION</Link>
          </li>
          <li className='menu-items'>
            <Link href='#home'>CONTACT</Link>
          </li>
        </ul>
      </HamburgerMenu>
    </>
  );
};

export default Navbar;
