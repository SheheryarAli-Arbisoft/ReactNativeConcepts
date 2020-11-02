import { TODO_ADD_TODO, TODO_REMOVE_TODO } from '../actions/types/todo';

const initialState = {
  todos: [],
};

export const todo = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TODO_ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case TODO_REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== payload)],
      };
    default:
      return state;
  }
};
