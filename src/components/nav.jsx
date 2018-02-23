import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
        <a href="#">Naloga 1</a>
        <a href="#">Naloga 2</a>
        <a href="#">Naloga 3</a>
        <a href="#">Naloga 4</a>
        <a href="#">Naloga 5</a>
        <a href="#">Naloga 6</a>
      </div>
    )
  }
}

export default Nav;