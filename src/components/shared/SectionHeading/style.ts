import styled from '@emotion/styled';

export const HeadingContainer = styled.div`
  margin-top: 1rem;
  text-align: center;

  h3 {
    font-size: 2rem;
    font-weight: 800;
    margin: 1rem;
  }

  span {
    font-size: 0.8rem;
  }

  & > div {
    width: 4rem;
    height: 0.3rem;
    background-color: green;
    margin: auto;
  }
`;
