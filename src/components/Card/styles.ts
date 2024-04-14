import styled from 'styled-components/native';

import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';

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

  position: relative;
`;

export const CardArrowRightButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const IconArrowUpRight = styled(ArrowUpRight).attrs<ICardColorProps>(
  ({ theme, background }) => ({
    size: 24,
    color:
      background === 'green'
        ? theme.COLORS.GREEN_200
        : background === 'red'
          ? theme.COLORS.RED_200
          : theme.COLORS.GRAY_600,
  }),
)``;

export const CardArrowLeftButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs<ICardColorProps>(
  ({ theme, background }) => ({
    size: 24,
    color:
      background === 'green'
        ? theme.COLORS.GREEN_200
        : background === 'red'
          ? theme.COLORS.RED_200
          : theme.COLORS.GRAY_600,
  }),
)``;
