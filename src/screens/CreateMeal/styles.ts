import styled from 'styled-components/native';

export const CreateMealContainer = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const CreateMealHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 50px 24px 20px;
`;

export const CreateMealBackButton = styled.TouchableOpacity``;

export const CreateMealContent = styled.View`
  flex: 1;
  align-items: center;

  padding: 40px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_50};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CardInformationContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 10px 6px 0;
`;
