import styled, { CSSObject } from '@emotion/styled';

export const HeroSectionWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  min-height: 90vh;
  justify-content: center;
  text-align: center;

  .title {
    line-height: 5rem;
    font-size: 4rem;
    color: var(--color-primary);
    padding-bottom: 1.5rem;
  }

  .subtitle {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .description {
    margin-top: 2.5rem;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .cta-section {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding: 0 1.5rem;
  }

  .cta-section > a {
    padding: 0.7rem 2.5em;
    border: 1.5px solid var(--color-primary);
    border-radius: 2rem;
    font-weight: 500;
  }

  .cta-section > a:first-child {
    background-color: var(--color-primary);
  }

  .cta-section > a:hover {
    background-color: var(--color-primary);
    color: black;
  }

  @media (min-width: 768px) {
    text-align: left;
    padding: 6rem;
    br {
      display: none;
    }

    .title {
      font-size: 6rem;
    }

    .subtitle {
      font-size: 2rem;
    }

    .cta-section {
      flex-direction: row;
      justify-content: left;
      padding: 0;
    }
  }
`;

export const AccountsListCSS: CSSObject = {
  display: 'none',
  '@media (min-width: 1024px)': {
    display: 'flex',
    position: 'absolute',
    right: '2rem',
    bottom: '6rem',
  },
};
