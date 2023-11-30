import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Button, useTheme } from '@rneui/themed';
import { IconNode, Theme } from '@rneui/base';

const DELETE_TODO_ICON: IconNode = {
  name: 'delete',
  color: 'white',
};

type DeleteTodoProps = {
  onReset: () => void;
  todoName: string;
};

export const DeleteTodoBtn: FC<DeleteTodoProps> = ({ onReset, todoName }) => {
  const { theme } = useTheme();
  const classes = useMemo(() => styles(theme), []);

  function onDeleteTodo() {
    console.log('Delete Todo:', todoName);
    onReset();
  }

  return (
    <Button
      onPress={onDeleteTodo}
      icon={DELETE_TODO_ICON}
      buttonStyle={classes.buttonContainer}
    />
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    buttonContainer: {
      minHeight: '100%',
      backgroundColor: theme.colors.warning,
      padding: 0,
    },
  });
