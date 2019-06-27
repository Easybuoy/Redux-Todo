import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combinedReducer from "./reducers";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Search from "./components/SearchComponent/Search";
import "./App.css";

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Set Task In LocalStorage
if (localStorage.getItem("tasks") === null) {
  localStorage.setItem("tasks", JSON.stringify([]));
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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

            <Search />
          </div>

          <h2>Welcome to your Todo App!</h2>

          <TodoForm />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
