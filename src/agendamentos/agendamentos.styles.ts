import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.amarelo};
  height: 22rem;

  ${media.lessThan("medium")`
    width: 420px;
    height: auto;
    padding: 2rem;
  `}
`;

export const Title = styled.span`
  ${media.lessThan("medium")`
  display: flex;
    align-items: center;
  justify-content: center;

  span {
    font-size: 1.5rem;
  }
  `} 
`;

export const Description = styled.p`
  
`;

export const ContentButton = styled.div`
  margin-top: 4rem;

  ${media.lessThan("medium")`
    
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

  `}
`;



