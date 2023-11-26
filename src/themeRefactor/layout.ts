import { ViewStyle } from 'react-native';

export type UtilityStyles = {
  fill: ViewStyle;
  flexRow: ViewStyle;
  flexColumn: ViewStyle;
  justifyCenter: ViewStyle;
  justifyBetween: ViewStyle;
  justifyAround: ViewStyle;
  justifyEvenly: ViewStyle;
  alignCenter: ViewStyle;
  alignStart: ViewStyle;
  alignEnd: ViewStyle;
  m1: ViewStyle;
  m2: ViewStyle;
  m3: ViewStyle;
  p1: ViewStyle;
  p2: ViewStyle;
  p3: ViewStyle;
};

export const layout: UtilityStyles = {
  fill: {
    display: 'flex',
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifyAround: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  m1: {
    margin: 8,
  },
  m2: {
    margin: 16,
  },
  m3: {
    margin: 24,
  },
  p1: {
    padding: 8,
  },
  p2: {
    padding: 16,
  },
  p3: {
    padding: 24,
  },
};
