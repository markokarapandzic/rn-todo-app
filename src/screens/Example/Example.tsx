import React, { FC } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTheme } from '@rneui/themed';
import { todos } from '@/mock/todo';
import { TodoItem } from '@/components/TodoItem';

const Example: FC = () => {
  const { theme } = useTheme();

  return (
    <View>
      <Text style={[theme.fonts.textMedium, { color: theme.colors.primary }]}>
        Example Screen
      </Text>
      <FlatList
        data={todos}
        renderItem={todo => <TodoItem todo={todo} />}
        keyExtractor={todo => todo.name}
      />
    </View>
  );
};

export default Example;
