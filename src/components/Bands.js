import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band,index) => {
      return <Band band={band}/>
    });
    
    return(
      <ul>
        Bands Component
        {bands}
      </ul>
    );
  }
};

export default Bands;
