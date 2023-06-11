import styled from 'styled-components';
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    margin: 20px;

    ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const Imagem = styled.div`
  margin-right: 20px;

  ${media.lessThan("medium")`
  margin: 0;
  margin-bottom: 12px;
  `}
`;

export const InformationNutri = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;

    ${media.lessThan("medium")`
    width: 100%;
  `}
`;

