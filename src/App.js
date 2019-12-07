import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./App.css";

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

  toggleTask = id => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (id === task.id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    });
  };

  clearFinished = () => {
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.done;
      })
    });
  };

  render() {
    return (
      <div>
        <header>
          <h2>Welcome to your Todo App!</h2>
        </header>
        <section>
          <TodoForm addTask={this.addTask} clear={this.clearFinished}></TodoForm>
          <TodoList toggle={this.toggleTask} todo={this.state.todo}>
            {console.log(this.state.todo)}
          </TodoList>
        </section>
      </div>
    );
  }
}

export default App;
