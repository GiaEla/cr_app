import React, { Component } from 'react';

class Nal1 extends Component {
  render() {
    const numbers = [];

    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0) {
        numbers.push(<div key={i}>Trojka</div>);
      }
      else if (i % 5 === 0){
        numbers.push(<div key={i}>Petka</div>);
      }
      else {
        numbers.push(<div key={i}>{i}</div>);
      }
    }

    return (
      <div className="numbers">
        {numbers}
      </div>
    );
  }
}

export default Nal1
