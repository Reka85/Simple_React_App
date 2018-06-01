import React from "react";


const Task = (props) => (
  <div className="task">
    <p className="task-text">{props.count}. {props.taskName} - {props.category}</p>
    <button className="button button-delete"
      onClick={(e) => {
        props.handleDeleteTask(props.taskName, props.category);
      }}
    >
      Delete
    </button>
  </div>
);


export default Task;
