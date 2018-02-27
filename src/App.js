import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './components/nav';
import Nal1 from './components/nal1';
import Nal2 from './components/nal2';
import Nal3 from './components/nal3';
import Nal4 from './components/nal4';
import Nal5 from './components/nal5';
import Nal6 from './components/nal6';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Nav />
          <Switch>
            <Route path="/1" component={Nal1} />
            <Route path="/2" component={Nal2} />
            <Route path="/3" component={Nal3} />
            <Route path="/4" component={Nal4} />
            <Route path="/5" component={Nal5} />
            <Route path="/6" component={Nal6} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
