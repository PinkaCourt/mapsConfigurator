import React from 'react';

const Step = props =>
  <div className="step" id={props.id}>
    <button id={props.buttonID}> {props.value}</button>
    </div>

export default Step


