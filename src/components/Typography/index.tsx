import { TextProps } from "react-native";
import { ITypographyStylesProps, TypographyContainer } from "./styles";

interface ITypographyProps extends TextProps, ITypographyStylesProps {}

export function Typography({ ...rest }: ITypographyProps) {
  return <TypographyContainer {...rest}></TypographyContainer>
}