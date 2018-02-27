import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

class Thumbnail extends Component {
  render() {
    return (
      <Col s={12} m={4} l={3} className="dummy-products">
        <Card
          className="small"
          header={<CardTitle image="https://lorempixel.com/250/250/nature/1">Izdelek</CardTitle>}
        >
          Best product in the world
        </Card>
      </Col>
    );
  }
}

export default Thumbnail;
