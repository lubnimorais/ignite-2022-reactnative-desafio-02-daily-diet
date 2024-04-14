import styled from 'styled-components/native';

import { ArrowUpRight } from 'phosphor-react-native';

import { FontSize } from '@components/Typography/types';

export interface ITextSize {
  titleFontSize?: FontSize;
}

export interface ICardColorProps {
  background?: 'gray' | 'green' | 'red';
}

export const CardContainer = styled.View<ICardColorProps>`
  width: 100%;
  height: 102px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, background }) => {
    if (background === 'gray') return theme.COLORS.GRAY_100;

    if (background === 'green') return theme.COLORS.GREEN_100;

    if (background === 'red') return theme.COLORS.RED_50;
  }};

  border-radius: 8px;

  padding: 16px;
`;

export const CardArrowButton = styled.TouchableOpacity``;

export const IconArrowUpRight = styled(ArrowUpRight)``;
