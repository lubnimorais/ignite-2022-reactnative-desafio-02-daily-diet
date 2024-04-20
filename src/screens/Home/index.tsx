import { SectionList } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Plus } from 'phosphor-react-native';

import { Header } from '@components/Header';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { Typography } from '@components/Typography';
import { Meal } from '@components/Meal';

import {
  HomeContainer,
  MealContainer,
  // SectionListMeals,
  SectionTitle,
} from './styles';

interface IMeal {
  title: string;
  data: [
    {
      id: string;
      hour: string;
      description: string;
      isOnTheDiet: boolean;
    },
  ];
}

const meals: IMeal[] = [
  {
    title: '20.04.2024',
    data: [
      {
        id: '1',
        hour: '20:00',
        description: 'X-tudo',
        isOnTheDiet: false,
      },
    ],
  },
  {
    title: '19.04.2024',
    data: [
      {
        id: '2',
        hour: '20:00',
        description: 'Salada',
        isOnTheDiet: true,
      },
    ],
  },
];

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

      <SectionList
        style={{ marginTop: 32 }}
        contentContainerStyle={
          meals.length === 0 && {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }
        }
        showsVerticalScrollIndicator={false}
        sections={meals}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        renderItem={({ item: meal }) => (
          <Meal
            id={meal.id}
            hour={meal.hour}
            description={meal.description}
            isOnTheDiet={meal.isOnTheDiet}
            onPress={() => {
              console.log('Meal: ', meal.description);
            }}
          />
        )}
        ListEmptyComponent={() => (
          <>
            <Typography>Não há refeições cadastradas ainda.</Typography>
            <Typography>Vamos cadastrar refeições hoje?.</Typography>
          </>
        )}
      />
    </HomeContainer>
  );
}
