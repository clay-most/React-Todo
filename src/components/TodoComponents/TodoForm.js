import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newThing: ""
    };

    
  }
  
    changeHandler = event => {
      this.setState({ newThing: event.target.value });
    };

    submitHandler = event => {
      event.preventDefault();
      if (this.state.newThing !== "") {
        this.props.addTask(this.state.newThing);
        this.setState({ newThing: "" });
      }
    };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            name="newThing"
            value={this.state.newThing}
            onChange={this.changeHandler}
          ></input>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
