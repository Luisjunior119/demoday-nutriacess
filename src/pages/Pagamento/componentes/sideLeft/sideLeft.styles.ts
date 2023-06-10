import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 10px;
    padding-left: 50px;
    border-right: 1px solid ${({theme}) => theme.Colors.vinho};
`;

export const Inputstyle = styled.div`
  width: 80%;
  display: flex;
  margin-bottom: 10px;
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
`;

export const DivRadioPlan = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
`;

export const SectionPlan = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const DivTypePlan = styled.div`
    margin-top: 10px;
`;