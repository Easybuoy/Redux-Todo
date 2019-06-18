import {
  GET_TODOS,
  ADD_TODO,
  CLEAR_COMPLETED,
  TOGGLE_COMPLETED
} from "./types";

export const getTodos = () => {
  return {
    type: GET_TODOS,
    payload: JSON.parse(localStorage.getItem("tasks"))
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
