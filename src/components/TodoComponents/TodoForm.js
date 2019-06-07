import React from "react";

class TodoForm extends React.Component{
  constructor(){
    super();
    this.state = {
      todo:""
    }
  }

  changeHandler = (e) => {
    this.setState({todo:e.target.value})
  }

  submitTodo = (e) =>{
    e.preventDefault()
    console.log(this.props.addTodo)
    console.log(this.state.todo)
    this.props.addTodo(this.state.todo)
    this.setState({todo:""})
  }

  render(){
    return(
      <form onSubmit={this.submitTodo}>
        <input type="text" name="todo" value="this.state.todo" placeholder="new task" onChange={this.changeHandler}/>
        <button>add</button>
        <button>remove</button>
      </form>
    )
  }
}

export default TodoForm;