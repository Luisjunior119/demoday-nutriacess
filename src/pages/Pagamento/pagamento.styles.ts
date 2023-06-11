import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`

${media.lessThan("medium")`
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  align-items: center;
  justify-content: center;
 
  `}
`;

export const Content = styled.div`
  display: flex;
  margin-top: 100px;
  
  ${media.lessThan("medium")`
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin: 0;
  
  `}
`;

export const SideRight = styled.div`
  width:50%;
  margin-left: 50px;
  

  ${media.lessThan("medium")`
  margin: 0;
  width: 100%;

  margin-top: 50px;
  `}
`;

export const HeaderPayment = styled.div`
    display: flex;
    justify-content: space-between;
   
`;

export const ButtonConfirm = styled.div`
    display: flex;
    margin: 10px 30px;
    justify-content: center;
    align-items: center;
    
    ${media.lessThan("medium")`
  margin: 10px;
  `}
`;
