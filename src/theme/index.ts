import { createTheme } from '@rneui/themed';
import { darkColors, lightColors } from './colors';
import { gutters } from './gutters';
import { layout } from './layout';
import { fontStyles } from './fonts';

export const theme = createTheme({
  lightColors: { ...lightColors },
  darkColors: { ...darkColors },
  spacing: { ...gutters },
  styles: { ...layout },
  fonts: { ...fontStyles },
});
