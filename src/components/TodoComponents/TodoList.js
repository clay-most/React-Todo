import React from "react";

import Task from "./Todo";

function TodoList(props) {
  return (
    <div>
      {console.log(props)}
      {props.todo.map(task => {
        return <Task key={task.id} task={task} toggle={props.toggle}></Task>;
      })}
    </div>
  );
}

export default TodoList;
