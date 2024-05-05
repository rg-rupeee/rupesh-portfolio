import styled from '@emotion/styled';

export const TitleContainer = styled.h4`
  font-size: 4rem;
  font-weight: 800;
`;

export const ResumeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  & > div {
    width: 100%    
  }
  
  & > div > div {
    border: 1px solid green;
    
  }
`;
