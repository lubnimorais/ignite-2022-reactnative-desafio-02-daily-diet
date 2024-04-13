import theme from "../../theme/";

export type TextAlign = 'auto' | 'center' | 'justify' | 'left' | 'right';
export type FontFamily = keyof typeof theme.FONT_FAMILY;
export type FontSize = keyof typeof theme.FONT_SIZE;
export type LineHeight = keyof typeof theme.LINE_HEIGHT;
export type Colors = keyof typeof theme.COLORS;