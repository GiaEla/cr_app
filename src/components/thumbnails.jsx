import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

import Img1 from '../images/img1.jpg';

class Thumbnail extends Component {
  render() {
    return (
      <Col s={12} m={4} l={3} className="dummy-products">
        <Card
          className="small"
          header={<CardTitle image={Img1}>Izdelek</CardTitle>}
        >
          Best product in the world
        </Card>
      </Col>
    );
  }
}

export default Thumbnail;
