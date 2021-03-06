import React, { Component } from 'react';
import { Button, Row, Slide, Slider } from 'react-materialize';
import fetchMock from 'fetch-mock';
import InfiniteScroll from 'react-infinite-scroll-component';

import Thumbnail from './thumbnails';
import Img1 from '../images/img1.jpg';
import Img2 from '../images/img2.jpg';
import Img3 from '../images/img3.jpg';

class Nal6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { name: 'Hello', desc: 'Desc', img: Img1 },
        { name: 'Hello', desc: 'Desc', img: Img1 },
        { name: 'Hello', desc: 'Desc', img: Img1 },
        { name: 'Hello', desc: 'Desc', img: Img1 },
        { name: 'Hello', desc: 'Desc', img: Img1 },
        { name: 'Hello', desc: 'Desc', img: Img1 },
        { name: 'Hello', desc: 'Desc', img: Img1 },
        { name: 'Hello', desc: 'Desc', img: Img1 },
      ],
      filtered: false
    };

    this.fetchFromServer = this.fetchFromServer.bind(this);
  }
  componentDidMount() {
    this.fetchFromServer();
  }

  getProducts() {
    return this.state.products.map(() => <Thumbnail />);
  }

  fetchFromServer() {
    const response = [
      { name: 'Hello', desc: 'Desc', img: Img1 },
      { name: 'Hello', desc: 'Desc', img: Img1 },
      { name: 'Hello', desc: 'Desc', img: Img1 },
      { name: 'Hello', desc: 'Desc', img: Img1 }
    ];


    fetchMock.get('*', response);

    fetch('http://mock.org').then(response => response.json()).then((products) => {
      this.setState({
        products: [...this.state.products, ...products]
      });
      console.log(this.state.products);
    });
    fetchMock.restore();
  }

  handleFilterClick() {
    const response = [
      { name: 'Filter', desc: 'Desc', img: Img1 },
      { name: 'Filter', desc: 'Desc', img: Img1 },
      { name: 'Filter', desc: 'Desc', img: Img1 },
      { name: 'Filter', desc: 'Desc', img: Img1 }
    ];


    fetchMock.get('*', response);

    fetch('http://mock.org').then(response => response.json()).then((products) => {
      this.setState({
        products: [...products],
        filtered: true
      });
      console.log(this.state.products);
    });
    fetchMock.restore();
  }

  handleUnfilterClick() {
    this.setState({
      filtered: false
    });
  }

  render() {
    return (
      <div className="container under-nav">
        <Slider className="costum-slider">
          <Slide
            src={Img1}
            title="Something"
          >
            Something
          </Slide>
          <Slide
            src={Img2}
            title="Something left"
            placement="left"
          >
            Something else
          </Slide>
          <Slide
            src={Img3}
            title="Something right"
            placement="right"
          >
            And yet something else
          </Slide>
        </Slider>

        {this.state.filtered ? '' : <Button waves="light" onClick={() => this.handleFilterClick()}>Filter on</Button>}
        {this.state.filtered ? <Button onClick={() => this.handleUnfilterClick()}>Filter off</Button> : ''}
        {this.state.filtered ? <Row>{this.getProducts()}</Row> : <InfiniteScroll
          next={this.fetchFromServer}
          refreshFunction={this.fetchFromServer}
          hasMore
          loader={<h4>Loading...</h4>}
        >
          <Row>{this.getProducts()}</Row>
        </InfiniteScroll>
        }
      </div>
    );
  }
}

export default Nal6;
