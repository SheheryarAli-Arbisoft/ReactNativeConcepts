import { TODO_ADD_TODO, TODO_REMOVE_TODO } from './types/todo';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = description => ({
  type: TODO_ADD_TODO,
  payload: {
    id: uuidv4(),
    description,
  },
});

export const removeTodo = id => ({
  type: TODO_REMOVE_TODO,
  payload: id,
});
