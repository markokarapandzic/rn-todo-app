import { useTheme } from '@rneui/themed';
import React from 'react';
import { View, Text } from 'react-native';

const Example = () => {
  const { theme } = useTheme();

  return (
    <View>
      <Text style={[theme.fonts.textMedium, { color: theme.colors.primary }]}>
        Example Screen
      </Text>
    </View>
  );
};

export default Example;
