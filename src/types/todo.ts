export enum TodoStatus {
  ToDo,
  Done,
}

export type TodoType = {
  name: string;
  description: string;
  deadline: Date;
  status: TodoStatus;
};
