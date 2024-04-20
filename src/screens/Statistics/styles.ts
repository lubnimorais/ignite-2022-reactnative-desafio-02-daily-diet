import styled from 'styled-components/native';

export type IStatisticContainerBackgroundStyleProps = 'green' | 'red';

interface IStatisticContainerProps {
  background: IStatisticContainerBackgroundStyleProps;
}

export const StatisticContainer = styled.View<IStatisticContainerProps>`
  flex: 1;

  background-color: ${({ theme, background }) =>
    background === 'green' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_50};
`;

export const StatisticHeader = styled.View`
  padding: 50px 24px 20px;
`;

export const StatisticContent = styled.View`
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
