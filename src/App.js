import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ["learn class components","take over the world"]
    };
  }
  render() {
    return (
      <div>
        <header>
          <h2>Welcome to your Todo App!</h2>
        </header>
        <section>
          <TodoForm></TodoForm>
          <TodoList todo={this.state.todo}></TodoList>
        </section>
      </div>
    );
  }
}

export default App;
