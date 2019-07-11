import React, {Component} from 'react';
import {LineBlockRow} from './styledComponent';

class RenderInput extends Component {
  render() {
    return(   
        <LineBlockRow>                    
          <input type="checkbox" />       
          <span>Email</span>
        </LineBlockRow>
    )
  }
}

export default RenderInput;