import { GET_TODOS, ADD_TODO } from "./types";

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
  // const newStateTasks = this.state.tasks.concat(newTask);
  // this.setDataToLocalStorage(newStateTasks);

  return {
    type: ADD_TODO,
    payload: newTask
  };
};
