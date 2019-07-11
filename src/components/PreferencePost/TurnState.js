import React, {Component} from 'react';
import {SwitchInput} from './styledComponent'

class TurnState extends Component {
  render() {
    return(
      <SwitchInput>
          <input type="checkbox"/>
          <span className="switch-slider round"></span>
      </SwitchInput>
    )
  }
}

export default TurnState;