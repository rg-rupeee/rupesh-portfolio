import styled, { CSSObject } from '@emotion/styled';

export const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  font-weight: 800;
  height: calc(100vh - 2 * 2rem);

  .title {
    font-size: 6rem;
  }

  .subtitle {
    font-size: 2rem;
  }

  .description {
    margin-top: 2.5rem;
  }

  .accounts-list {
  }
`;

export const AccountsListCSS: CSSObject = {
  position: 'absolute',
  right: '2rem',
  bottom: '2rem',
};
