import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  gap: 4rem;

  img {
    border-radius: 2rem;
    width: 25rem;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  h4 {
    font-size: 3rem;
    font-weight: 600;
  }

  section {
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
