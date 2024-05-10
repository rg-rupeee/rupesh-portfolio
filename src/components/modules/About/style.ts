import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  padding: 4rem 0;
  display: flex;
  gap: 4rem;

  img {
    border-radius: 2rem;
    width: 25rem;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  h4 {
    font-size: 4rem;
    font-weight: 600;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
