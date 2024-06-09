import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.1rem;

  a {
    color: var(--color-primary);
  }

  h4 {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 3rem;
  }

  img {
    border-radius: 2rem;
    margin: auto;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    section {
      padding: 0 2rem;
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    padding: 6rem;
    flex-direction: row;

    img {
      width: 25rem;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    h4 {
      font-size: 3rem;
    }
  }
`;
