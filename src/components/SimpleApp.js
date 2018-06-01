import React from 'react';
import Header from './Header';
import AddTask from './AddTask';
import Tasks from './Tasks';

export default class SimpleApp extends React.Component {
  state = {
    tasks: []
  };

  handleAddTask = (newTask) => {
    const filteredTasks = this.state.tasks.filter((task) => task.name === newTask.name)
    //throws error if there is already a task with the same name
    if (filteredTasks.length > 0){
      return "The task is already in the list";
    }
    //throws error if task name is empty
    else if(newTask.name === ""){
      return "Enter a valid task name";
    }
    // if there is no error adds the task to the list
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(newTask)
    }));
  }

  handleDeleteTask = (taskName) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.name !== taskName)
    }));
  }

  handleClearTasks = () => {
    this.setState(() => ({
      tasks: []
    }));
  }

  render(){
    return(
      <div>
        <Header />
          <div className="container">
            <AddTask handleAddTask={this.handleAddTask}/>

            <div className="tasks">
              <Tasks tasks={this.state.tasks}
                handleDeleteTask={this.handleDeleteTask}
                clearTasks={this.handleClearTasks}/>
            </div>
          </div>
      </div>
    );
  }
}
