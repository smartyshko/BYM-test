import React, {Component} from 'react';
import TurnState from './TurnState';
import RenderInput from './RenderInput';
import Button from './Button';
import {
  PreferencePost, 
  RowLine, 
  ColumnDesсription,
  ColumnCheckbox,
  H3Title,
  ParagraphComponent,
  Column
} from './styledComponent';

class PreferenceItem extends Component {   
  render() {
    const {isOn, inputEmail, inputLetter, inputCard, inputSms, title, description} = this.props.mockObject; 
    return(
      <PreferencePost>
          <RowLine>
            <ColumnDesсription>
                <H3Title>{title}</H3Title>
                <ParagraphComponent>{description}</ParagraphComponent>
            </ColumnDesсription>         
            <ColumnCheckbox>
              <TurnState/>
            </ColumnCheckbox>
          </RowLine>
          <RowLine>
            <Column>
              <RenderInput/>
            </Column>
            <Column>
              <Button />
            </Column>
          </RowLine>
      </PreferencePost>
    )
  }
}

export default PreferenceItem;