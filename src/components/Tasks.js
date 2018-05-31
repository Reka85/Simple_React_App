import React from "react";
import Task from "./Task";

const Tasks = (props) => (
  <div className="options">
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
