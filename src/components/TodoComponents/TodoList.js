import React from "react";
import Todo from "./Todo"

const TodoList = props => {
  console.log(props.taskList);
  return (
    <div>
      {props.taskList.map(todo => {
        return <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />;
      })}
    </div>
  );
};

export default TodoList;
