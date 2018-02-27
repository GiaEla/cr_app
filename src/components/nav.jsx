import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { menuIsExpanded: false };
  }

  // handleMouseEnter() {
  //   this.setState({
  //     menuIsExpanded: true
  //   });
  // }
  //
  // handleMouseLeave() {
  //   this.setState({
  //     menuIsExpanded: false
  //   });
  // }

  render() {
    let expandedClass = this.state.menuIsExpanded ? ' expanded' : '';

    return (
      <div className="navbar-fixed">
        <Navbar>
          <NavItem href="/1">Naloga 1</NavItem>
          <NavItem href="/2">Naloga 2</NavItem>
          <NavItem href="/3">Naloga 3</NavItem>
          <NavItem href="/4">Naloga 4</NavItem>
          <NavItem href="/5">Naloga 5</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default Nav;