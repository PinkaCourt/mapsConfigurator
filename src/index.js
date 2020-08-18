import "./style.css";
import React from 'react';
import ReactDOM from 'react-dom';
import ToolBar from './components/map/topbar/ToolBar.jsx'
import CameraListContainer from './components/cameralist/cameralist.jsx' 
import Map from './components/map/Map.jsx' 


import makeElement from './func/makeElement.js'
import {GetOptions} from "./func/httpapi.js"
import {PostOptions} from "./func/httpapi.js"
import {randomDelta} from "./func/random.js"
import {mathSymbolRandom} from "./func/random.js"
import {Data} from "./func/data.js"
import {log} from "./func/cameras.js"
import {createMap} from "./func/cameras.js"
import {getMaps} from "./func/cameras.js"
import {listener} from "./func/listeners.js"
import {URL} from './constants/url.js'
import {URLmaplist} from './constants/url.js'
import {URLchangeMap} from './constants/url.js'
import {URLhosts} from './constants/url.js'
/*
ReactDOM.render(
  <React.StrictMode>
    <ToolBar/>
  </React.StrictMode>,
  document.getElementById('topbar')
);
*/
//CameraList

ReactDOM.render(
  <React.StrictMode>
    <CameraListContainer/>
  </React.StrictMode>,
  document.getElementById('sidebar')
);

//Map
ReactDOM.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>,
  document.getElementById('view_map')
);

/*
у Андрюхи

document.body.appendChild(storeContainer);
	ReactDOM.render(<StorePanel />, storeContainer);

*/

//let toDeleteMaps = [];
/*
function selectID(e) {
  let value = e.meta.id;
  toDeleteMaps.push(value);
}
*/


//listener(getHostButton, log())

//getHostButton.addEventListener("click", getHost(URLhosts, new GetOptions(AUTH)));
//getHostButton.addEventListener("click", log);

//listener(createMapButton, createMap(AUTH))
//listener(removeMapsButton, getMaps(AUTH))

//maplistButton.addEventListener("click", getMaps (AUTH));



/*
maplistButton.addEventListener("click", async function() {
  let mapList = await fetch(URLmaplist, new GetOptions(AUTH))
    .then(res => res.json())
    .then( data => 
      data.items.map(selectID)
      );
  makeElement('resultDiv', toDeleteMaps);
});
*/

/*
document.getElementById('getGeolocation').addEventListener("click", function() {
  function success (position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    localStorage.setItem('longitude', position.coords.longitude);
    localStorage.setItem('latitude', position.coords.latitude);
  }

  function error (error) {
    console.log(error)
  }
  let geoPosition = navigator.geolocation.getCurrentPosition(success,  error  )
});
*/

/*
removeMapsButton.addEventListener("click", getMaps(AUTH)
    .then(() =>
        fetch(URLchangeMap, new PostOptions(AUTH, new ToDelete(toDeleteMaps)))
        .then(res => res.json())
        )   } 
);
*/


/*
document.getElementById('barrelButton').addEventListener("click", function() {
  while (resultDiv.firstChild !== resultDiv.lastChild) {
    resultDiv.removeChild(resultDiv.lastChild);
  }
})
*/


//let camerasID = [];
/*
function selectCameraID(e) {
  let value = e.displayId;
  camerasID.push(value);
}
*/

/*
getCamerasbutton.addEventListener("click", getCameras (AUTH) 
);
  */



  /*
  let camerasArray = await fetch(URLcameraList, new GetOptions(AUTH))
    .then(res => res.json())
    .then(data => {
      data.cameras.map(selectCameraID)
    })
  makeElement('resultDiv', camerasID);  
*/

/*
addCamerasOnMap.addEventListener("click", async function() {
  console.log(mathSymbolRandom(randomDelta(), 1));

  let x = localStorage.getItem('longitude');
  let y = localStorage.getItem('latitude')

  let request = await fetch(URLgRPC, new PostOptions(AUTH, new Data( '67364835-3908-47e4-b894-64915cff2476' , x, y, 'COURT', 1)))
    .then(res => res.json())

  makeElement('resultDiv', 'ok'); 
});

*/