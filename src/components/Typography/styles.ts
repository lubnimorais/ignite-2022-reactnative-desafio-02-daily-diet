import styled, { css } from 'styled-components/native';

import { Colors, FontFamily, FontSize, LineHeight, TextAlign } from './types';

export type ITypographyStylesProps = {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  textAlign?: TextAlign;
  lineHeight?: LineHeight;
  color?: Colors;
};

export const TypographyContainer = styled.Text<ITypographyStylesProps>`
  ${({ theme, textAlign, fontFamily, fontSize, color, lineHeight }) => css`
    font-family: ${theme.FONT_FAMILY[fontFamily ?? 'REGULAR']};
    font-size: ${theme.FONT_SIZE[fontSize ?? 'MD']}px;
    color: ${theme.COLORS[color ?? 'GRAY_600']};

    text-align: ${textAlign || 'left'};
    line-height: ${theme.LINE_HEIGHT[lineHeight ?? 'MD']}px;
  `};
`;
