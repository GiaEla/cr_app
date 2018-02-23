import React, { Component } from 'react';

class Nal2 extends Component {
  fixed_function() {
    (function() {
      var index;
      var length = 20;

      for (index = 0; index < length; index++) {
        setTimeout(function(x) { return function() { console.log(x); }; }(index), 200*index);
      }
    })();
  }
  render() {
    return (
      <div> Look at the console
        {this.fixed_function()}
      </div>
    );
  }
}

export default Nal2;
