import { PressableProps } from 'react-native';

import { Typography } from '@components/Typography';

import {
  BulletStatus,
  IBulletStatusProps,
  MealContainer,
  Separator,
} from './styles';

interface IMealProps extends IBulletStatusProps, PressableProps {
  hour: string;
  description: string;
}

export function Meal({ hour, description, isOnTheDiet, ...rest }: IMealProps) {
  return (
    <MealContainer {...rest}>
      <Typography fontFamily="BOLD" fontSize="XSM">
        {hour}
      </Typography>

      <Separator />

      <Typography style={{ flex: 1 }} numberOfLines={1}>
        {description}
      </Typography>

      <BulletStatus isOnTheDiet={isOnTheDiet} />
    </MealContainer>
  );
}
