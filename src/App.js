import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Nal1 from './components/nal1';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Nav/>
          <Switch>
            <Route path="/1" component={Nal1}/>
            <Route path="/2" component={Nal2}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
