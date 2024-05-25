import styled, { CSSObject } from '@emotion/styled';

type AccountLinksProps = {
  type?: 'row' | 'col';
  extraStyles?: CSSObject;
};

export const AccountLinks = styled.div<AccountLinksProps>`
  display: flex;
  gap: 1rem;

  flex-direction: ${(props) => (props.type === 'col' ? 'column' : 'row')};

  a:hover {
    color: var(--color-primary);
  }

  ${(props) => props.extraStyles};
`;
