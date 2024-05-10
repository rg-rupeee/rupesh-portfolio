import styled from '@emotion/styled';

export const SectionTitleContainer = styled.h4`
  padding-left: 8rem;
  font-size: 6rem;
  font-weight: 800;
`;

export const ResumeSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  padding-left: 9rem;
  font-weight: 600;

  border-left: solid 5px green;

  span {
    color: green;
  }

  h4 {
    font-weight: 800;
    font-size: 1.3rem;
  }

  p {
    font-weight: 400;
    width: 70%;
    font-style: italic;
  }
`;
