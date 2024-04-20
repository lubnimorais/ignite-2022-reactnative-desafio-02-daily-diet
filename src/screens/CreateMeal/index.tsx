import { ArrowLeft } from 'phosphor-react-native';

import { Card } from '@components/Card';
import { Typography } from '@components/Typography';
import { TypographyContainer } from '@components/Typography/styles';

import {
  CreateMealHeader,
  CreateMealContainer,
  CreateMealContent,
  CardInformationContainer,
  CreateMealBackButton,
} from './styles';

export function CreateMeal() {
  return (
    <CreateMealContainer>
      <CreateMealHeader>
        <CreateMealBackButton style={{ width: '15%' }}>
          <ArrowLeft />
        </CreateMealBackButton>

        <TypographyContainer
          style={{ width: '60%' }}
          fontFamily="BOLD"
          fontSize="SM"
          lineHeight="LG"
          textAlign="center"
        >
          Nova refeição
        </TypographyContainer>

        <Typography style={{ width: '15%' }} />
      </CreateMealHeader>

      <CreateMealContent>
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
      </CreateMealContent>
    </CreateMealContainer>
  );
}
