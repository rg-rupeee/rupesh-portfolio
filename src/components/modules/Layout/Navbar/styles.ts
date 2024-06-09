import styled from '@emotion/styled';

type NavItemProps = {
  active?: boolean;
};

export const NavContainer = styled.nav`
  font-weight: 500;
  font-size: 0.8rem;
  margin: 1rem 0.5rem;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  @media (min-width: 768px) {
    margin: 3rem 4rem 0 4rem;
  }
`;

export const Logo = styled.div``;

export const NavList = styled.ul`
  display: none;
  backdrop-filter: blur(15px);

  @media (min-width: 768px) {
    padding: 0.7rem;
    display: flex;
    border: 1px solid var(--color-primary);
    border-radius: 2rem;
  }
`;

export const NavItem = styled.ul<NavItemProps>`
  &:hover {
    color: var(--color-black);
    background-color: var(--color-primary);
  }

  .active: {
    background-color: var(--color-primary);
  }

  // background-color: var(--color-primary);
  background-color: ${(props) => props.active && 'var(--color-primary)'};

  @media (min-width: 768px) {
    margin: 0 0.5rem;
    padding: 0.3rem 0.7rem;
    display: flex;
    border-radius: 2rem;
  }
`;

export const HamburgerIcon = styled.div`
  display: block;
  cursor: pointer;
  padding: 0.8rem;
  margin: 0 1rem;
  border-radius: 100%;
  background-color: rgb(24 24 27);
  border: 1px solid var(--color-primary);
  @media (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  top: 0;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  background-color: var(--color-black);
  height: 80vh;
  border-radius: 0 0 30px 30px;
  font-weight: 600;
  font-size: 1.3rem;

  box-shadow: 0 3px 3px -3px var(--color-primary);
  -webkit-box-shadow: 0 3px 3px -3px var(--color-primary);
  -moz-box-shadow: 0 3px 3px -3px var(--color-primary);

  .menu {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
