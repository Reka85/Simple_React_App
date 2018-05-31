import React from "react";
import uuid from "uuid";

class AddTask extends React.Component {

  addNewTask = (e) =>{
    e.preventDefault();
    if (this.refs.name.value ===""){
      alert("Task name is required")
    } else {
      const newTask = {
        id: uuid.v4(),
        name: this.refs.name.value,
        category: this.refs.category.value
      }
      //clear input field
      e.target.elements.taskName.value = "";
      this.props.handleAddTask(newTask);
    }
  }

  render(){
    let categoryOptions = this.props.categories.map((category) => {
      return <option key={category} value={category}>{category}</option>
    });
    return(
      <div>
        <h3>Add a task</h3>
        <form onSubmit={this.addNewTask}>
          <div>
            <label>Task name</label>
            <input type="text" ref="name" name="taskName"/>
          </div>
          <br/>
          <div>
            <label>Category</label>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br/>
          <button className="button button-add">Add task</button>
        </form>
      </div>
    );
  }
}

AddTask.defaultProps = {
  categories: ["Pets", "Cleaning", "Repair", "Clothes", "Food", "Other"]
}
export default AddTask;
