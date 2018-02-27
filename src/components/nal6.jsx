import React, { Component } from 'react';
import { Carousel, Row } from 'react-materialize';
import fetchMock from 'fetch-mock';
import InfiniteScroll from 'react-infinite-scroll-component';

import Thumbnail from './thumbnails';

class Nal6 extends Component {

  constructor(props) {
    super(props);

    this.state = { products: [
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
    ] };
    this.handleWaypointLeave = this.handleWaypointLeave.bind(this);
    this.fetchFromServer = this.fetchFromServer.bind(this);
  }
  componentDidMount() {
    this.fetchFromServer();
  }

  fetchFromServer(path) {

    const response = [
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
      { name: 'Hello', desc: 'Desc', img: '/static/img1.jpg' },
    ];


    fetchMock.get('*', response);

    fetch('http://mock.org').then((response) => { return response.json(); }).then((products) => {

      this.setState({
        products: [...this.state.products, ...products]
      });
      console.log(this.state.products);
    });
    fetchMock.restore();

  }

  getProducts(){
    return this.state.products.map(() => {
      return <Thumbnail/>
    })
  }
  render() {
    return (
      <div className="container">
        <Carousel images={[
          'http://lorempixel.com/250/250/sports/1',
          'http://lorempixel.com/250/250/sports/2',
          'http://lorempixel.com/250/250/sports/3',
          'http://lorempixel.com/250/250/sports/4',
          'http://lorempixel.com/250/250/sports/5'
        ]}
        />

        <InfiniteScroll
          next={this.fetchFromServer}
          refreshFunction={this.fetchFromServer}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
          <Row>{this.getProducts()}</Row>
        </InfiniteScroll>

      </div>
    );
  }
}

export default Nal6;
