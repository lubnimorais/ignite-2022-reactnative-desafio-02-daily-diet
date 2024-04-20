import styled from 'styled-components/native';

export const MealContainer = styled.Pressable`
  width: 100%;
  height: 55px;

  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  justify-content: space-between;

  padding: 14px 16px 14px 14px;

  margin-bottom: 8px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
`;

export const Separator = styled.View`
  width: 1px;
  height: 14px;

  margin: 0 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export interface IBulletStatusProps {
  isOnTheDiet: boolean;
}

export const BulletStatus = styled.View<IBulletStatusProps>`
  width: 14px;
  height: 14px;

  background-color: ${({ theme, isOnTheDiet }) =>
    isOnTheDiet ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};

  margin-left: 12px;

  border-radius: 12px;
`;
