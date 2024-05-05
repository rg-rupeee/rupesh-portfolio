import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  font-size: 0.8rem;
  position: sticky;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div``;

export const NavList = styled.ul`
  padding: 0.7rem;
  display: flex;
  border: 1px solid green;
  border-radius: 2rem;
`;

export const NavItem = styled.ul`
  margin: 0 0.5rem;
  padding: 0.3rem 0.7rem;
  display: flex;
  border-radius: 2rem;
  border: 1px solid green;

  
  &:hover {
    background-color: green;
  }
`;
