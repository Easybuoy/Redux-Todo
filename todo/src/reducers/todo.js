import {
  GET_TODOS,
  ADD_TODO,
  CLEAR_COMPLETED,
  TOGGLE_COMPLETED
} from "../actions/types";

const INITIAL_STATE = {
  todo: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todo: action.payload
      };
    case ADD_TODO:
      localStorage.setItem(
        "tasks",
        JSON.stringify(state.todo.concat(action.payload))
      );
      return {
        ...state,
        todo: state.todo.concat(action.payload)
      };
    case CLEAR_COMPLETED:
      localStorage.setItem(
        "tasks",
        JSON.stringify(state.todo.filter(task => task.completed !== true))
      );

      return {
        ...state,
        todo: state.todo.filter(task => task.completed !== true)
      };
    case TOGGLE_COMPLETED:
      let newTodo = state.todo.map(task => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(newTodo));
      return {
        ...state,
        todo: newTodo
      };
    default:
      return state;
  }
};
