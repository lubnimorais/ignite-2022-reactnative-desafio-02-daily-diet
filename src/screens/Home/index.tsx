import { useTheme } from 'styled-components/native';

import { Header } from '@components/Header';
import { Card } from '@components/Card';
import { Plus } from 'phosphor-react-native';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';

import { HomeContainer, MealContainer } from './styles';

export function HomeScreen() {
  const theme = useTheme();

  return (
    <HomeContainer>
      <Header />

      <Card
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        background="green"
      />

      <MealContainer>
        <Typography fontSize="SM">Refeições</Typography>
        <Button
          iconSolid={<Plus color={theme.COLORS.WHITE} size={18} />}
          iconOutline={<Plus color={theme.COLORS.GRAY_600} size={18} />}
          title="Nova refeição"
        />
      </MealContainer>
    </HomeContainer>
  );
}
