import React, { Component } from 'react';
import {Col, Navbar, NavItem, Row} from 'react-materialize';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { menuIsExpanded: false };
  }

  handleMouseEnter() {
    this.setState({ menuIsExpanded: true });
  }

  handleMouseLeave() {
    this.setState({ menuIsExpanded: false });
  }

  render() {
    return (
      <div onMouseLeave={() => this.handleMouseLeave()}>
        <div className='navbar-fixed'>
          <Navbar onClick={() => this.handleMouseLeave()}>
            <NavItem href='/1' onMouseEnter={() => this.handleMouseLeave()}>Naloga 1</NavItem>
            <NavItem href='/2' onMouseEnter={() => this.handleMouseLeave()}>Naloga 2</NavItem>
            <NavItem href='/3' onMouseEnter={() => this.handleMouseLeave()}>Naloga 3</NavItem>
            <NavItem href='/4' onMouseEnter={() => this.handleMouseLeave()}>Naloga 4</NavItem>
            <NavItem href='/5' onMouseEnter={() => this.handleMouseLeave()}>Naloga 5</NavItem>
            <NavItem href='/6' onMouseEnter={() => this.handleMouseEnter()}>Naloga 6</NavItem>
          </Navbar>
          </div>
        <div className={this.state.menuIsExpanded ? 'mega-menu-opened' : 'mega-menu-closed'}>
          <Row>
            <Col s={12} m={4}>
              <h3>Group 1</h3>
              <h4>Item 1</h4>
              <h4>Item 2</h4>
              <h4>Item 3</h4>
              <h4>Item 4</h4>
            </Col>
            <Col s={12} m={4}>
              <h3>Group 2</h3>
              <h4>Item 1</h4>
              <h4>Item 2</h4>
              <h4>Item 3</h4>
              <h4>Item 4</h4>
            </Col>
            <Col s={12} m={4}>
              <h3>Group 3</h3>
              <h4>Item 1</h4>
              <h4>Item 2</h4>
              <h4>Item 3</h4>
              <h4>Item 4</h4>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Nav;
