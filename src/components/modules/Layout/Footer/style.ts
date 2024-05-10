import styled from '@emotion/styled';

export const FooterContainer = styled.nav`
  bottom: 0;
  padding-top: 1rem;
  border: 1px solid green;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const FooterTitle = styled.div`
  font-size: 3rem;  
`

export const AccountLinks = styled.div`
  display: flex;
  gap: 1rem;

  a:hover {
    color: green;
  }
`

export const ScrollArrow = styled.div`
  background-color: green;
  color: black;
  padding: 0.4rem;
  border-radius: 4px;
  margin: 1.5rem;

  &:hover {
    background-color: blue;
  }
`

export const ClosingLine = styled.p`
  margin-bottom: 1rem;
`