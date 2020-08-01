import React, {Component} from 'react';

const Form = (props) =>
  <div>
    <label htmlFor={props.id}> {props.id} </label>
    <input type='text' id={props.id} name={props.id} value={props.value}></input>
    </div>
export default Form;

