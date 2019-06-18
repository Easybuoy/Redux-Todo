import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, getTodos } from "../../actions/todo";
import "./Todo.css";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }
  componentDidMount() {
    this.props.getTodos();
  }

  onChange = e => {
    this.setState({ task: e.target.value });
  };

  keyUp = e => {
    if (e.key === "Enter") {
      this.props.addTodo(this.state.task);
    }
  };

  render() {
    const { addTodo, clearCompleted } = this.props;

    return (
      <div className="todoForm">
        <input
          type="text"
          value={this.state.task}
          placeholder="Enter Task"
          onChange={this.onChange}
          onKeyUp={this.keyUp}
        />
        <button
          onClick={() => {
            addTodo(this.state.task);
          }}
        >
          Add Todo
        </button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { addTodo, getTodos }
)(TodoForm);
