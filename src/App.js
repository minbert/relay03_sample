import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Table from './Table';

class App extends Component {
  render(){
    return (
      <div>
        <NavigationBar />
        <Table />
      </div>
    );
  }
}

export default App;
