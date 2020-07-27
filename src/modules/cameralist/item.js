import React, {Component} from 'react';
//здесь тупо по 1 камере/ будет когда-нибудь

const Item = props =>
  <li>
    <span className="Camera_id"> {props.id}</span>
    <span className="Camera_name"> {props.name}</span>
  </li>;

export default Item;

//{this.props.name}