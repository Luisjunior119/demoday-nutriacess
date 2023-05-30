import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;

  padding: 24px;
  background-color: ${({ theme }) => theme.Colors.vinho};

  border-radius: 24px;

  cursor: pointer;
`;

export const Content = styled.div`
  margin-left: 32px;
  display: flex;
  flex-direction: column;

  gap: 8px;
`;
