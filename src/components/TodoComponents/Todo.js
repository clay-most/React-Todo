import React from "react";

const Task = props => {
  return (
    <div
      className={`${props.task.done ? " done" : ""}`}
      onClick={() => props.toggle(props.task.id)}
    >
      {props.task.text}
    </div>
  );
};

export default Task;
