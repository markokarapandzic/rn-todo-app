import '@rneui/themed';
import { UtilityStyles } from './layout';
import { FontStyles } from './fonts';

// Used to extend the Theme Object
// from React Native Elements
declare module '@rneui/themed' {
  export interface Theme {
    styles: UtilityStyles;
    fonts: FontStyles;
  }
}
