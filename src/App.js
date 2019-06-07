import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css"

const todos = [
  { task: "build app", id: 1, completed: false },
  { task: "style app", id: 2, completed: false }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addTodo = todo => {
    const newTodo = { task: todo, id: Date.now(), completed: false };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = () => {
    const completedTodos = this.state.todos.filter(
      todo => todo.completed === false
    );
    this.setState({ todos: completedTodos });
  };

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
