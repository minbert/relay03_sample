import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Table from './Table';
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import post1 from './Sample.md';

const posts = [post1];

class App extends Component {
  render(){
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/hi">
            <Main title="From the firehose" posts={posts} />
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
