import styled, { CSSObject } from '@emotion/styled';

export const HeroSectionWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  min-height: calc(100vh - 2 * 4rem);

  .title {
    font-size: 6rem;
  }

  .subtitle {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .description {
    margin-top: 2.5rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .cta-section {
    margin-top: 3rem;
    font-size: 0.7rem;
    font-weight: 600;
    display: flex;
    gap: 1rem;
  }

  .cta-section > a{
    padding: 0.7rem 1.3rem;
    border: 1px solid green;
    border-radius: 2rem;
  }

  .cta-section > a:first-child{
    background-color: green;
  }

  .cta-section > a:hover{
    background-color: green;
    color: black;
  }
`;

export const AccountsListCSS: CSSObject = {
  position: 'absolute',
  right: '2rem',
  bottom: '2rem',
};
