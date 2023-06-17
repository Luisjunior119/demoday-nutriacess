import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  ${media.lessThan("medium")`
   
  `}
`;

export const InputStyled = styled.input`
  border-color: ${({ theme }) => theme.Colors.vinho};
  border-radius: 6px;
  padding: 24px 200px;
  font-size: 1rem;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;

  ${media.lessThan("medium")`
    padding: 24px 20px;
    width: 700px;
    margin-left: 0; 
    margin-right: 300px; 
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  ${media.lessThan("small")`
    width: 290px;
    margin-left: 0; 
    margin-right: -45px; 
  `}
`;


export const Button = styled.button`
  background-color: ${({ theme }) => theme.Colors.vinho};
  border-radius: 6px;
  padding: 1.1rem 2rem;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;

  ${media.lessThan("medium")`
    padding: 1.1rem 1.5rem;
  `}

  ${media.lessThan("small")`
    width: 100%;
  `}
`;
