import React, { Component } from 'react';

class Nal3 extends Component {
  fixed_function() {
    if(navigator.appVersion.indexOf('MSIE 7.') != -1) {
      (function() {
        alert("Hello World");
      })();
    }
  }
  render() {
    return (
      <div> If !IE7, nothing happens
        {this.fixed_function()}
      </div>
    );
  }
}

export default Nal3;
