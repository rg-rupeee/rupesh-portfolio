import styled from '@emotion/styled';

export const FooterContainer = styled.nav`
  background-color: var(--color-black-secondary);
  bottom: 0;
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const FooterTitle = styled.div`
  font-size: 2.5rem;
`;

export const ClosingLine = styled.p`
  margin-bottom: 1rem;
  color: var(--color-primary);
`;
