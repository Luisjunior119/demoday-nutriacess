import styled from "styled-components";
import { IContainer } from "./chooseUserType.types";

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 24px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const CardWrapper = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;
