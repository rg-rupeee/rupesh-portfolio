import styled from '@emotion/styled';

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
    margin: 3rem 4rem;
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

export const NavItem = styled.ul`
  &:hover {
    color: var(--color-black);
    background-color: var(--color-primary);
  }

  @media (min-width: 768px) {
    margin: 0 0.5rem;
    padding: 0.3rem 0.7rem;
    display: flex;
    border-radius: 2rem;
  }
`;
