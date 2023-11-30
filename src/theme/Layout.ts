import { TextStyle, ViewStyle } from 'react-native';
import { gutters } from './gutters';

export type UtilityStyles = {
  fill: ViewStyle;
  flex: ViewStyle;
  screenContainer: ViewStyle;
  flexRow: ViewStyle;
  flexColumn: ViewStyle;
  justifyCenter: ViewStyle;
  justifyBetween: ViewStyle;
  justifyAround: ViewStyle;
  justifyEvenly: ViewStyle;
  alignCenter: ViewStyle;
  alignStart: ViewStyle;
  alignEnd: ViewStyle;
  fullWidth: ViewStyle;
  m1: ViewStyle;
  m2: ViewStyle;
  m3: ViewStyle;
  m4: ViewStyle;
  m5: ViewStyle;
  p1: ViewStyle;
  p2: ViewStyle;
  p3: ViewStyle;
  p4: ViewStyle;
  p5: ViewStyle;
};

export const layout: UtilityStyles = {
  fill: {
    display: 'flex',
    flex: 1,
  },
  flex: {
    display: 'flex',
  },
  screenContainer: {
    display: 'flex',
    flex: 1,
    padding: gutters.sm,
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
  fullWidth: {
    width: '100%',
  },
  m1: {
    margin: gutters.xs,
  },
  m2: {
    margin: gutters.sm,
  },
  m3: {
    margin: gutters.md,
  },
  m4: {
    margin: gutters.lg,
  },
  m5: {
    margin: gutters.xs,
  },
  p1: {
    padding: gutters.xs,
  },
  p2: {
    padding: gutters.sm,
  },
  p3: {
    padding: gutters.md,
  },
  p4: {
    padding: gutters.lg,
  },
  p5: {
    padding: gutters.xl,
  },
};
