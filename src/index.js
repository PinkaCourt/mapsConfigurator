import "./style.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App'
import makeElement from './func/makeElement.js'
import {GetOptions} from "./func/httpapi.js"
import {PostOptions} from "./func/httpapi.js"
import {ToCreate} from "./func/bodys.js"
import {ToDelete} from "./func/bodys.js"
import {randomDelta} from "./func/random.js"
import {mathSymbolRandom} from "./func/random.js"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const IP =  document.getElementById('IP').value
const PORT = document.getElementById('PORT').value
const USER = document.getElementById('USER').value
const PASS = document.getElementById('PASS').value
const AUTH = 'Basic ' + btoa(USER + ':' + PASS);

const URL = 'http://' + IP + ':' + PORT
const URLhosts = URL + '/hosts'
const URLcameraList = URL + '/camera/list'
const URLchangeMap =   URL + '/v1/maps:change'
const URLmaplist =   URL + '/v1/maps?view=VIEW_MODE_ONLY_META'
const getHostButton = document.getElementById('getHost')
const addingMarkersButton = document.getElementById('addingMarkersButton')
const removeMapsButton = document.getElementById('removeMapsButton')
const resultDiv = document.getElementById('resultDiv')
const getCamerasbutton = document.getElementById('getCamerasbutton')
const addCamerasOnMap = document.getElementById('addCamerasOnMap')

let toDeleteMaps = [];

function selectID(e) {
  let value = e.meta.id;
  toDeleteMaps.push(value);
}

getHostButton.addEventListener("click", async function() {
  let host = await fetch(URLhosts, new GetOptions(AUTH))
    .then(res =>
      res.json()
      )
    .then(data => {
      data[0]
      makeElement('resultDiv', data[0])
    });
});

createMapButton.addEventListener("click", async function() {
  let map = await fetch(URLchangeMap, new PostOptions(AUTH, new ToCreate))
    .then(res =>
      fetch(URLmaplist, new GetOptions(AUTH))
      .then(res => res.json())
      .then(data => makeElement('resultDiv', data.items[0].meta.id))
      )
});

addingMarkersButton.addEventListener("click", async function() {
  let mapList = await fetch(URLmaplist, new GetOptions(AUTH))
    .then(res => res.json())
    .then( data => 
      data.items.map(selectID)
      );
  makeElement('resultDiv', toDeleteMaps);
});

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

removeMapsButton.addEventListener("click", async function() {
  let mapList = await fetch(URLmaplist, new GetOptions(AUTH))
    .then(res => res.json())
    .then(data => {
      data.items.map(selectID)})
    .then(() =>
        fetch(URLchangeMap, new PostOptions(AUTH, new ToDelete(toDeleteMaps)))
        .then(res => res.json())
        )     
});

document.getElementById('barrelButton').addEventListener("click", function() {
  while (resultDiv.firstChild !== resultDiv.lastChild) {
    resultDiv.removeChild(resultDiv.lastChild);
  }
})

let camerasID = [];

function selectCameraID(e) {
  let value = e.displayId;
  camerasID.push(value);
}

getCamerasbutton.addEventListener("click", async function() {
  let camerasArray = await fetch(URLcameraList, new GetOptions(AUTH))
    .then(res => res.json())
    .then(data => {
      data.cameras.map(selectCameraID)
    })
  makeElement('resultDiv', camerasID);  
});

addCamerasOnMap.addEventListener("click", async function() {
  console.log(mathSymbolRandom(randomDelta(), 1))
  /*let camerasArray = await fetch(URLcameraList, new GetOptions(AUTH))
    .then(res => res.json())
    .then(data => {
      data.cameras.map(selectCameraID)
    })
  makeElement('resultDiv', camerasID);  */
});