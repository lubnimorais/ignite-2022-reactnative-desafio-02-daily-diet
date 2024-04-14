import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

import { Typography } from '@components/Typography';

export type IButtonTypeStyleProps = 'SOLID' | 'OUTLINE';

interface IButtonProps {
  type: IButtonTypeStyleProps;
  isActive: boolean;
}

export const ButtonContainer = styled(TouchableOpacity).attrs<IButtonProps>(
  () => ({
    activeOpacity: 0.7,
  }),
)`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type, isActive }) => {
    if (type === 'SOLID') {
      return isActive ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_500;
    }

    if (type === 'OUTLINE') {
      return isActive ? 'transparent' : theme.COLORS.GRAY_200;
    }
  }};

  padding: 16px;

  margin-top: 8px;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ButtonTitle = styled(Typography).attrs<IButtonProps>(
  ({ type }) => ({
    fontFamily: 'BOLD',
    color: type === 'SOLID' ? 'WHITE' : 'GRAY_600',
  }),
)`
  margin-left: 10px;
`;
