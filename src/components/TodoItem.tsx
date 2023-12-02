import React, { FC, useCallback, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, ListItem, useTheme } from '@rneui/themed';
import { DeleteTodoBtn } from './DeleteTodoBtn';
import { TodoStatus, TodoType } from '../types/todo';

type TodoItemProps = {
  todo: TodoType;
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const {
    theme: { colors, styles },
  } = useTheme();

  const todoIcon = useMemo(
    () =>
      todo.status === TodoStatus.Done ? (
        <Icon name="checkcircleo" type="antdesign" color={colors.secondary} />
      ) : (
        <Icon name="minuscircleo" type="antdesign" />
      ),
    [todo.status],
  );

  function onTodoCompleteToggle() {
    console.log('Toggle Todo:', todo.name);
  }

  function onEditTodo() {
    console.log('Edit Todo:', todo.name);
  }

  const handleRightContent = useCallback(
    (reset: () => void) => (
      <DeleteTodoBtn todoName={todo.name} onReset={reset} />
    ),
    [todo.name],
  );

  return (
    <ListItem.Swipeable
      leftWidth={80}
      rightWidth={90}
      rightContent={handleRightContent}
    >
      <TouchableOpacity onPress={onTodoCompleteToggle}>
        {todoIcon}
      </TouchableOpacity>
      <TouchableOpacity style={styles.fill} onPress={onEditTodo}>
        <ListItem.Content>
          <ListItem.Title>{todo.name}</ListItem.Title>
          <ListItem.Subtitle>{todo.description}</ListItem.Subtitle>
        </ListItem.Content>
      </TouchableOpacity>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};
