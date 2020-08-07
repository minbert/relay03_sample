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
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/hi">
            <div>Hi!</div>
          </Route>
          <Route path="/">
            <Table />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
