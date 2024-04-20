import { Card } from '@components/Card';
import { Typography } from '@components/Typography';

import {
  StatisticHeader,
  StatisticContainer,
  StatisticContent,
  CardInformationContainer,
  IStatisticContainerBackgroundStyleProps,
} from './styles';

type IStatisticProps = {
  background?: IStatisticContainerBackgroundStyleProps;
  onBackScreen?: () => void;
};

export function StatisticScreen({
  background = 'green',
  onBackScreen,
}: IStatisticProps) {
  return (
    <StatisticContainer background={background}>
      <StatisticHeader>
        <Card
          title="90,86%"
          subtitle="das refeições dentro da dieta."
          iconPosition="left"
          background="green"
          onIconButtonPress={onBackScreen}
        />
      </StatisticHeader>

      <StatisticContent>
        <Typography
          fontFamily="BOLD"
          fontSize="SM"
          style={{ marginBottom: 20 }}
        >
          Estatísticas gerais
        </Typography>

        <Card
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
          showIconButton={false}
        />

        <Card
          style={{ marginTop: 6 }}
          title="109"
          subtitle="refeições registradas"
          showIconButton={false}
        />

        <CardInformationContainer>
          <Card
            style={{ width: '48%' }}
            background="green"
            title="99"
            subtitle="refeições dentro da dieta"
            showIconButton={false}
          />

          <Card
            style={{ width: '48%' }}
            background="red"
            title="10"
            subtitle="refeições fora da dieta"
            showIconButton={false}
          />
        </CardInformationContainer>
      </StatisticContent>
    </StatisticContainer>
  );
}
