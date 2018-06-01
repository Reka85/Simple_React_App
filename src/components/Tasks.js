import React from "react";
import Task from "./Task";

const Tasks = (props) => (
  <div className="tasks">
    <h3 className="tasks-header">Your household tasks</h3>
    <button className="button button-delete"
      disabled={props.tasks.length === 0}
      onClick={props.clearTasks}
      >
      Clear tasks
    </button>
    {props.tasks.length === 0 && <p>No tasks added yet</p>}
    {
      props.tasks.map((task, index) => (
        <Task
          key={task.name}
          taskName={task.name}
          category={task.category}
          count={index + 1}
          handleDeleteTask={props.handleDeleteTask}
        />
      ))

    }
  </div>
);

export default Tasks;
