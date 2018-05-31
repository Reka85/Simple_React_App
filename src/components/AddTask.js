import React from "react";

class AddTask extends React.Component {
  state = {
    newTask: {}
  }

  addNewTask = (e) =>{
    e.preventDefault();
    if (this.refs.name.value ===""){
      alert("Task name is required")
    } else {
      this.setState({
        newTask: {
          id: uuid.v4(),
          name: this.refs.name.value
        }
      })
    }
  }
  render(){
    return(
      <div>
        <h3>Add a task</h3>
        <form onSubmit={this.addNewTask}>
          <input type="text" ref="name"/>
          <button className="button">Add task</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
