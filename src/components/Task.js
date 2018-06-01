import React from "react";
import PropTypes from "prop-types";

const Task = (props) => (
  <div className="task">
    <p className="task-text">{props.count}. {props.task.name} - {props.task.category}</p>
    <button className="button button-delete"
      onClick={(e) => {
        props.handleDeleteTask(props.task.name, props.task.category);
      }}
    >
      Delete
    </button>
  </div>
);

Task.propTypes = {
  task: PropTypes.object,
  count: PropTypes.number,
  handleDeleteTask: PropTypes.func
}

export default Task;
