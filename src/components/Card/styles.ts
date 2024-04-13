import styled from "styled-components/native";

export interface ICardColor {
  background?: 'gray' | 'green'
}

export const CardContainer = styled.View`
  width: 100%;
  height: 102px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_50};

  border-radius: 8px;

  padding: 16px;
`;