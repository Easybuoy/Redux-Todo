// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

export default function TodoList({ tasks, toggleCompleted }) {
  return (
    <div>
      {tasks.map(task => {
        return <Todo key={task.id} task={task} toggleCompleted ={toggleCompleted} />;
      })}
    </div>
  );
}
