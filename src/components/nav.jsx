import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {nav_offset: 0}
  }

  get_offset() {
    let offset = ReactDOM
      .findDOMNode(this.refs['nav'])
      .getBoundingClientRect(); //outputs <h3> coordinates
    this.setState({nav_offset: offset})
  }

  render() {
    return (
      <div id="navbar">
        <Link to={{ pathname: '/1' }}> Naloga 1</Link>
        <Link to={{ pathname: '/2' }}> Naloga 2</Link>
      </div>
    )
  }
}

export default Nav;