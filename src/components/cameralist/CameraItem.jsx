import React, {Component} from 'react';

const CameraItem = (camera) =>
  <li 
    className="camera_item"
    draggable="true"
    >
    <span> {camera.id} {' '} {camera.name}</span>
  </li>;

export default CameraItem;
