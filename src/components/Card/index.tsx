import { Typography } from '@components/Typography';

import {
  CardArrowButton,
  CardContainer,
  ICardColorProps,
  ITextSize,
  IconArrowUpRight,
} from './styles';

interface ICardProps extends ICardColorProps, ITextSize {
  title: string;
  subtitle: string;
}

export function Card({
  title,
  subtitle,
  background = 'gray',
  titleFontSize = 'XXL',
}: ICardProps) {
  return (
    <CardContainer background={background}>
      <CardArrowButton>
        <IconArrowUpRight />
      </CardArrowButton>

      <Typography fontSize={titleFontSize} lineHeight="LG" fontFamily="BOLD">
        {title}
      </Typography>

      <Typography color="GRAY_500" fontSize="SM" textAlign="center">
        {subtitle}
      </Typography>
    </CardContainer>
  );
}
