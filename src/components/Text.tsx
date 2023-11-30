import React, { FC, useMemo } from 'react';
import { TextStyle } from 'react-native';
import { Text, TextProps, useTheme } from '@rneui/themed';

interface TextLocalProps extends TextProps {
  primary?: boolean;
  secondary?: boolean;
  center?: boolean;
  children: React.ReactNode;
}

export const TextLocal: FC<TextLocalProps> = ({
  primary,
  secondary,
  center,
  children,
  ...props
}) => {
  const {
    theme: { colors },
  } = useTheme();

  const styleConfig: TextStyle = useMemo(() => {
    const config: TextStyle = {};

    if (primary) {
      config.color = colors.primary;
    } else if (secondary && !primary) {
      config.color = colors.secondary;
    }

    if (center) {
      config.width = '100%';
      config.textAlign = 'center';
    }

    return config;
  }, [primary, secondary, center, colors]);

  return (
    <Text style={[styleConfig, props.style]} {...props}>
      {children}
    </Text>
  );
};

TextLocal.defaultProps = {
  secondary: false,
  primary: false,
  center: false,
};
