import { TodoStatus, TodoType } from '../types/todo';

export const todos: TodoType[] = [
  {
    name: 'Task 1',
    description: 'Complete coding assignment',
    deadline: new Date('2023-12-01'),
    status: TodoStatus.ToDo,
  },
  {
    name: 'Task 2',
    description: 'Read a chapter of a book',
    deadline: new Date('2023-12-02'),
    status: TodoStatus.ToDo,
  },
  {
    name: 'Task 3',
    description: 'Go for a run',
    deadline: new Date('2023-12-03'),
    status: TodoStatus.Done,
  },
];
