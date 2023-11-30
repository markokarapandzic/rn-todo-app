import { TextStyle } from 'react-native';

export type FontStyles = {
  textTiny: TextStyle;
  textSmall: TextStyle;
  textMedium: TextStyle;
  textLarge: TextStyle;
  textXL: TextStyle;
  textXXL: TextStyle;
  textCenter: TextStyle;
};

export const fontStyles: FontStyles = {
  textTiny: {
    fontSize: 10,
  },
  textSmall: {
    fontSize: 14,
  },
  textMedium: {
    fontSize: 18,
  },
  textLarge: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 32,
  },
  textXXL: {
    fontSize: 40,
  },
  textCenter: {
    textAlign: 'center',
  },
};

export default fontStyles;
