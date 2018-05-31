import React from 'react';
import Header from './Header';
import AddTask from './AddTask';
import Tasks from './Tasks';

export default class SimpleApp extends React.Component {
  state = {
    tasks: []
  };

  //add it if it is not already in the list
  handleAddTask = (newTask) => {
    const filteredTasks = this.state.tasks.filter((task) => task.name === newTask.name)
    if(filteredTasks.length === 0) {
      this.setState((prevState) => ({
        tasks: prevState.tasks.concat(newTask)
      }))
    }
  }

  handleDeleteTask = (taskName, taskCategory) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.name !== taskName)
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
                handleDeleteTask={this.handleDeleteTask}/>
            </div>
          </div>
      </div>
    );
  }
}
