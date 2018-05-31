import React from 'react';
import Header from './Header';

export default class SimpleApp extends React.Component {
  render(){
    return(
      <div>
        <Header />
          <div className="container">
          </div>
      </div>
    )
  }
}
