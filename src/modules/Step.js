import React from 'react';

const Step = props =>
  <div className="button_wrapper" id={props.id}>
    <button id={props.buttonID}> {props.value}</button>
    </div>

export default Step


