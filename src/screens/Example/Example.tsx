import React, { FC } from 'react';
import { View, FlatList } from 'react-native';
import { useTheme, Button, useThemeMode } from '@rneui/themed';
import { todos } from '../../mock/todo';
import { TodoItem } from '../../components/TodoItem';
import { TextLocal } from '../../components/Text';

const Example: FC = () => {
  const {
    theme: { styles, colors },
  } = useTheme();
  const { mode, setMode } = useThemeMode();

  function onThemeChange() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <View
      style={[styles.screenContainer, { backgroundColor: colors.background }]}
    >
      <TextLocal h2 primary center>
        Test
      </TextLocal>
      <Button title="Theme" onPress={onThemeChange} />
      <FlatList
        data={todos}
        renderItem={todo => <TodoItem todo={todo.item} />}
        keyExtractor={todo => todo.name}
      />
    </View>
  );
};

export default Example;
