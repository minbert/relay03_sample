import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Table from './Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/">
            <Table />
          </Route>
          <Route path="/hi">
            <div>Hi!</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
