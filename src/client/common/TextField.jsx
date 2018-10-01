import React, { Fragment } from 'react';
import { Input, InputGroupAddon, InputGroupText } from 'reactstrap';

import InputField from './InputField';


function TextField(props) {
  const input = (
    <Input
      {...props.input}
      placeholder={props.placeholder}
      disabled={props.disabled}
      type={props.type || 'text'}
      autoFocus={props.autoFocus}
      min={props.min}
    />
  )
  const { extraAddon } = props

  return extraAddon ? (
    <Fragment>
      <InputGroupAddon type="append">
        <InputGroupText>
          {extraAddon}
        </InputGroupText>
      </InputGroupAddon>
      {input}
    </Fragment>
  ) : input
}

export default InputField(TextField);
