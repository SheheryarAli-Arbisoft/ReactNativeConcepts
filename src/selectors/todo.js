import { createSelector } from 'reselect';

export const todosSelector = createSelector(
  state => state.todo.todos,
  todos => todos
);
