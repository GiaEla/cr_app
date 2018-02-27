import React, { Component } from 'react';

class Nal3 extends Component {
  fixedFunction() {
    if (navigator.appVersion.indexOf('MSIE 7.') != -1) {
      (function() {
        alert('Hello World');
      })();
    }
  }
  render() {
    return (
      <div> If !IE7, nothing happens
        {this.fixedFunction()}
      </div>
    );
  }
}

export default Nal3;
