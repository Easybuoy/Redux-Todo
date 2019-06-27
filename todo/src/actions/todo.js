import {
  GET_TODOS,
  ADD_TODO,
  CLEAR_COMPLETED,
  TOGGLE_COMPLETED,
  SEARCH_TODO
} from "./types";

export const getTodos = () => {
  return {
    type: GET_TODOS
  };
};

export const addTodo = task => {
  const newTask = {
    id: Date.now(),
    task,
    completed: false
  };

  return {
    type: ADD_TODO,
    payload: newTask
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  };
};

export const search = e => {
  const searchValue = e.target.value;
  if (searchValue.length > 0) {
    return {
      type: SEARCH_TODO,
      payload: searchValue
    };
  }

  return {
    type: GET_TODOS
  };
};
