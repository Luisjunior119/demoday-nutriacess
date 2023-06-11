import styled from 'styled-components';
import media from "styled-media-query"

export const Container = styled.div`
    margin-top:70px;

    ${media.lessThan("medium")`
    width: 90%;
    margin-left: 16px;
   align-items: center;
   justify-content: center;
   
  `}
`;

export const Title = styled.div`
    margin-top: 20px;
`;

export const Styletext = styled.div`
  display: flex;
`;

export const Line = styled.div`
  display:flex;
  border: 1px solid ${({theme}) => theme.Colors.vinho};
  width: 100%;


`;

export const SectionValue = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    margin: 40px 0px;
    
    /* ${media.lessThan("medium")`
   width: 92%;
   align-items: center;
   justify-content: center;
  `} */
`;

export const SectionValuePlan = styled.div`
    display: flex;
    padding: 20px 0px;
    justify-content: space-between;
    
    /* ${media.lessThan("medium")`
  
   align-items: center;
   justify-content: center;
  `} */
`;
