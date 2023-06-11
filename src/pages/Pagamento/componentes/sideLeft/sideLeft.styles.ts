import styled from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 10px;
    padding-left: 50px;
    border-right: 1px solid ${({theme}) => theme.Colors.vinho};
    
  
    ${media.lessThan("medium")`
    width: 100%;
    border: none;
    padding: 0;
    margin-top: 20px;
  `}
`;

export const DivTitulo = styled.div`
  display: flex;
  flex-direction: column;

    ${media.lessThan("medium")`
   align-items: center;
   justify-content: center;
     gap: 4px;
  `}
`;

export const Alinhamento = styled.div`

    ${media.lessThan("medium")`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
  `}
`;

export const Inputstyle = styled.div`
  width: 80%;
  display: flex;
  margin-bottom: 10px;

  
  ${media.lessThan("medium")`
    margin: 0;
    max-width: 54%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `}
`;


export const StyledCheckbox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: justify;
 `;

export const ContentInput = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    gap: 20px;
    

    ${media.lessThan("medium")`
    gap: 3px;
  `}
`;

export const DivRadioPlan = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    gap: 20px;

    ${media.lessThan("medium")`
   display: flex;
   flex-direction: column;
   justify-content: left;
    margin-left: 35px;
   flex-wrap: wrap;
  `}
`;

export const SectionPlan = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const DivTypePlan = styled.div`
    margin-top: 10px;
   
    ${media.lessThan("medium")`
    margin-top: 5px;
    text-align: left;
    margin-left: 42px;
    `}
`;