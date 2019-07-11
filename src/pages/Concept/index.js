import React, {Component, Fragment} from 'react';
import PreferencePost from '../../components/PreferencePost';
import Container from './styledPage';

const mockObject = {
  title: 'New Instructions',
  description: 'Communications sent automatically for  every new instruction.',
  isOn: false,
  inputEmail: false,
  inputLetter: false,
  inputCard: false,
  inputSms: false,
}

class Concept extends Component {
  
  render() {
    return(      
        <Fragment>
          <Container>
            <PreferencePost mockObject={mockObject} />
          </Container>      
        </Fragment>
    )
  }
}

export default Concept; 