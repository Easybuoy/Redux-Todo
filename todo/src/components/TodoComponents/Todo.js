import React from "react";
import { connect } from "react-redux";

import { toggleCompleted } from "../../actions/todo";

function Todo(props) {
  const { task, toggleCompleted } = props;

  const todoStyle = {
    cursor: "pointer",
    textDecoration: task.completed ? "line-through" : "none",
    backgroundColor: task.completed ? "green" : ""
  };
  return (
    <div>
      <p
        className="todo"
        onClick={() => {
          toggleCompleted(task.id);
        }}
        style={todoStyle}
      >
        {task.task}
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { toggleCompleted }
)(Todo);
