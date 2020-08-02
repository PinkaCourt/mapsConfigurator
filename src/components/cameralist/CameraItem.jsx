import React, {Component} from 'react';

const CameraItem = (camera) =>
  <li className="camera_item">
    <span> {camera.id} {' '} {camera.name}</span>
  </li>;

export default CameraItem;
