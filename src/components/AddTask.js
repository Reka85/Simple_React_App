import React from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

class AddTask extends React.Component {
  state = {
    error: undefined
  };

  addNewTask = (e) =>{
    e.preventDefault();
    const newTask = {
      id: uuid.v4(),
      name: this.refs.name.value,
      category: this.refs.category.value
    }

    //clear input field
    e.target.elements.taskName.value = "";

    //returns error message if task is not valid
    const error = this.props.handleAddTask(newTask);

    this.setState(() => ({
      error
    }));
  }

  render(){
    let categoryOptions = this.props.categories.map((category) => {
      return <option key={category} value={category}>{category}</option>
    });
    return(
      <div className="add-tasks">
        <h2>Add a task</h2>
        <form onSubmit={this.addNewTask}>
          <div className="form-inputs">
            <div>
              <label>Task name</label>
              <input type="text" ref="name" name="taskName" placeholder="Walk the dog"/>
            </div>

            <div>
              <label>Category</label>
              <select ref="category">
                {categoryOptions}
              </select>
            </div>
            <button className="button button-add">Add task</button>
          </div>
          {this.state.error && <p className="error-message">{this.state.error}</p>}
        </form>
      </div>
    );
  }
}

AddTask.defaultProps = {
  categories: ["Pets", "Cleaning", "Repair", "Clothes", "Food", "Other"]
}

AddTask.propTypes = {
  categories: PropTypes.array,
  handleAddTask: PropTypes.func
}

export default AddTask;
