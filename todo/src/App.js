import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Search from "./components/SearchComponent/Search";
import "./App.css";

// Set Task In LocalStorage
if (localStorage.getItem("tasks") === null) {
  localStorage.setItem("tasks", JSON.stringify([]));
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: this.getTasks(),
      task: ""
    };
  }

  getTasks = () => {
    return JSON.parse(localStorage.getItem("tasks"));
  };

  onChange = e => {
    this.setState({ task: e.target.value });
  };

  addTodo = () => {
    if (this.state.task.length === 0) {
      return;
    }
    const newTask = {
      id: Date.now(),
      task: this.state.task,
      completed: false
    };
    const newStateTasks = this.state.tasks.concat(newTask);
    this.setDataToLocalStorage(newStateTasks);
    this.setState({ tasks: newStateTasks, task: "" });
  };

  setDataToLocalStorage = data => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  toggleCompleted = id => {
    const { tasks } = this.state;

    tasks.find(task => {
      if (task.id === id) {
        task.completed = !task.completed ? true : false;
        return task;
      }
    });

    this.setDataToLocalStorage(tasks);
    this.setState({ tasks: tasks });
  };

  clearCompleted = () => {
    const { tasks } = this.state;
    let unCompletedTasks = tasks.filter(task => task.completed !== true);

    this.setDataToLocalStorage(unCompletedTasks);
    this.setState({ tasks: unCompletedTasks });
  };

  keyUp = e => {
    if (e.key === "Enter") {
      this.addTodo();
    }
  };

  search = e => {
    this.setState({ tasks: this.getTasks() }, () => {});

    const searchValue = e.target.value;
    if (searchValue.length > 0) {
      let newState = this.state.tasks.filter(task => {
        if (task.task.includes(searchValue)) {
          return task;
        }
      });
      this.setState({ tasks: newState });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="topSection">
          <div className="infoDiv">
            <div className="info">
              <p
                className="infoBox"
                style={{
                  backgroundColor: "green"
                }}
              />
              <p>Completed</p>
            </div>

            <div className="info">
              <p
                className="infoBox"
                style={{
                  backgroundColor: "#99621e"
                }}
              />
              <p>UnCompleted</p>
            </div>
          </div>

          <Search search={this.search}/>
        </div>

        <h2>Welcome to your Todo App!</h2>

        <TodoForm
          onChange={this.onChange}
          addTodo={this.addTodo}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
          keyUp={this.keyUp}
        />
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
