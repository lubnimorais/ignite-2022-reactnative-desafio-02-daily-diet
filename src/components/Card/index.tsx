import { ViewProps } from "react-native";

import { Typography } from "@components/Typography";

import { CardContainer } from "./styles";

interface ICardProps extends ViewProps {
  title: string;
  subtitle: string;
}

export function Card({ title, subtitle, ...rest }: ICardProps) {
  return (
    <CardContainer {...rest}>
      <Typography fontSize="XXL" lineHeight="LG" fontFamily="BOLD">
        {title}
      </Typography>

      <Typography color="GRAY_500" fontSize="SM" textAlign="center">
        {subtitle}
      </Typography>
    </CardContainer>
  )
}