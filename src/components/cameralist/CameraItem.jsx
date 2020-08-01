import React, {Component} from 'react';
//здесь тупо по 1 камере/ будет когда-нибудь

const CameraItem = props =>
  <li className="camera_bm">
    <span className="Camera_id"> {props.id}</span>
    <span className="Camera_name"> {props.name}</span>
  </li>;

export default CameraItem;

//{this.props.name}