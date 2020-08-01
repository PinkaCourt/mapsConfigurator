import React from 'react';

const Button = (props) =>
  <div className="button_wrapper" id={props.id}>
    <button id={props.buttonID}> {props.value}</button>
    </div>

export default Button


