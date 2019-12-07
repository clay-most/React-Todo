import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [
        { text: "learn class components", id: 1, done: false },
        { text: "take over the world", id: 2, done: false }
      ]
    };
  }

  addTask = text => {
    const newTask = {
      text: text,
      id: Date.now,
      done: false
    };
    this.setState({ todo: [...this.state.todo, newTask] });
  };

  toggleTask = event => {};

  render() {
    return (
      <div>
        <header>
          <h2>Welcome to your Todo App!</h2>
        </header>
        <section>
          <TodoForm addTask={this.addTask}></TodoForm>
          <TodoList todo={this.state.todo}></TodoList>
        </section>
      </div>
    );
  }
}

export default App;
