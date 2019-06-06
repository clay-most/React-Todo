import React from "react";

class App extends React.Component {
  constuctor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
