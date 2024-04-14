import { Typography } from '@components/Typography';

import {
  CardArrowLeftButton,
  CardArrowRightButton,
  CardContainer,
  ICardColorProps,
  ITextSize,
  IconArrowLeft,
  IconArrowUpRight,
} from './styles';

interface ICardProps extends ICardColorProps, ITextSize {
  title: string;
  subtitle: string;
  iconPosition?: 'left' | 'right';
  showIconButton?: boolean;
  onIconButtonPress?: () => void;
}

export function Card({
  title,
  subtitle,
  iconPosition = 'right',
  showIconButton = true,
  background = 'gray',
  titleFontSize = 'XXL',
  onIconButtonPress,
}: ICardProps) {
  return (
    <CardContainer background={background}>
      {showIconButton && iconPosition === 'left' ? (
        <CardArrowLeftButton onPress={onIconButtonPress}>
          <IconArrowLeft background={background} />
        </CardArrowLeftButton>
      ) : (
        <CardArrowRightButton onPress={onIconButtonPress}>
          <IconArrowUpRight background={background} />
        </CardArrowRightButton>
      )}

      <Typography fontSize={titleFontSize} lineHeight="LG" fontFamily="BOLD">
        {title}
      </Typography>

      <Typography color="GRAY_500" fontSize="SM" textAlign="center">
        {subtitle}
      </Typography>
    </CardContainer>
  );
}
