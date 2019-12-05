import React from "react";

function TodoList(props) {
  return (
    <div>
      {props.todo.map(task => {
        return <div key={task}>{task}</div>;
      })}
    </div>
  );
}

export default TodoList;
