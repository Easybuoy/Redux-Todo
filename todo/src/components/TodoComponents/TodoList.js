// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../../actions/todo";

function TodoList(props) {
  const { todo } = props.todo;

  return (
    <div>
      {todo.map(task => {
        return <Todo key={task.id} task={task} />;
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { getTodos }
)(TodoList);
