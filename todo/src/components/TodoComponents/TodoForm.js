import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, getTodos, clearCompleted } from "../../actions/todo";
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

  addTodo = () => {
    if (this.state.task.length === 0) {
      return;
    }

    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  onChange = e => {
    this.setState({ task: e.target.value });
  };

  keyUp = e => {
    if (e.key === "Enter") {
      this.props.addTodo(this.state.task);
      this.setState({ task: "" });
    }
  };

  render() {
    const { clearCompleted } = this.props;

    return (
      <div className="todoForm">
        <input
          type="text"
          value={this.state.task}
          placeholder="Enter Task"
          onChange={this.onChange}
          onKeyUp={this.keyUp}
        />
        <button onClick={this.addTodo}>Add Todo</button>
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
  { addTodo, getTodos, clearCompleted }
)(TodoForm);
