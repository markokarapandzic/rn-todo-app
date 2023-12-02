import React, { FC, useMemo, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useTheme, useThemeMode, SpeedDial } from '@rneui/themed';
import { todos } from '../../mock/todo';
import { TodoItem } from '../../components/TodoItem';
import { TextLocal } from '../../components/Text';
import { useThemeLocal } from '@/hooks/useThemeLocal';

const EDIT_ICON = { name: 'edit', color: '#fff' };
const ADD_ICON = { name: 'add', color: '#fff' };
const CLOSE_ICON = { name: 'close', color: '#fff' };

const Example: FC = () => {
  const [open, setOpen] = useState(false);
  const {
    theme: { styles, colors },
  } = useTheme();
  const { mode } = useThemeMode();
  const { setTheme } = useThemeLocal();

  function onThemeChange() {
    setTheme(mode === 'light' ? 'dark' : 'light');
    setOpen(false);
  }

  function onAddTodo() {
    console.log('Add Todo');
    setOpen(false);
  }

  const themeIcon = useMemo(() => {
    const name = mode === 'dark' ? 'sun' : 'moon';
    const type = mode === 'dark' ? 'feather' : 'entypo';

    return {
      name,
      color: '#fff',
      type,
    };
  }, [mode]);

  return (
    <View
      style={[styles.screenContainer, { backgroundColor: colors.background }]}
    >
      <TextLocal h2 primary center>
        Your Todo's
      </TextLocal>
      <FlatList
        data={todos}
        renderItem={todo => <TodoItem todo={todo.item} />}
        keyExtractor={todo => todo.name}
      />
      <SpeedDial
        isOpen={open}
        icon={EDIT_ICON}
        openIcon={CLOSE_ICON}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action icon={ADD_ICON} title="Add" onPress={onAddTodo} />
        <SpeedDial.Action
          icon={themeIcon}
          title="Theme"
          onPress={onThemeChange}
        />
      </SpeedDial>
    </View>
  );
};

export default Example;
