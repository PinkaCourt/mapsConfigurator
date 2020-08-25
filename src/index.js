import "./style.css";
import React from 'react';
import ReactDOM from 'react-dom';
import CameraListContainer from './components/cameralist/cameralist.jsx' 
import Map from './components/map/Map.jsx' 

ReactDOM.render(
  <React.StrictMode>
    <CameraListContainer/>
  </React.StrictMode>,
  document.getElementById('sidebar')
);

ReactDOM.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>,
  document.getElementById('view_map')
);
