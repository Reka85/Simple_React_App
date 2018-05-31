import React from 'react';
import Header from './Header';
import AddTask from './AddTask';

export default class SimpleApp extends React.Component {
  render(){
    return(
      <div>
        <Header />
          <div className="container">
            <AddTask />
          </div>
      </div>
    );
  }
}
