import { GET_TODOS, ADD_TODO } from "../actions/types";

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
    default:
      return state;
  }
};
