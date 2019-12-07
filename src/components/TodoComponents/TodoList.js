import React from "react";

function TodoList(props) {
  return (
    <div>
      {props.todo.map(task => {
        return <div key={task.id}>{task.text}</div>;
      })}
    </div>
  );
}

export default TodoList;
