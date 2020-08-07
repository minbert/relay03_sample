import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Table from './Table';
import Post from './components/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/board" component={Post} />
          <Route path="/hi">
            <div>Hi!</div>
          </Route>
          <Route exact path="/">
            <Table />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
