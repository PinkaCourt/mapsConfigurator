//import getOptions from "./constants.js"
//const { getOptions } = require('./constants.js')
import "./style.css";
import React from 'react';
import ReactDOM from 'react-dom';

// const of http
import App from './modules/App'

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

const getHostButton = document.getElementById('getHost')
const addingMarkersButton = document.getElementById('addingMarkersButton')
const removeMapsButton = document.getElementById('removeMapsButton')
const resultDiv = document.getElementById('resultDiv')

const URL = 'http://' + IP + ':' + PORT
const URLhosts = URL + '/hosts'
const URLIndexByRole = URL + '/v1/security/config/user'
const URLcreateMap =   URL + '/v1/maps:change'
const URLmaplist =   URL + '/v1/maps?view=VIEW_MODE_ONLY_META'

const AUTH = 'Basic ' + btoa(USER + ':' + PASS);
const providerID = '9cb89d76-67e9-47cf-8137-b9ee9fc46388';

const getOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Basic ' + btoa(USER + ':' + PASS),
    ContentType: 'application/json'
  }
}

getHostButton.addEventListener("click", async function() {
  host = await fetch(URLhosts, getOptions)
    .then(res =>
      res.json()
      )
    .then(data => {
      makeElement('resultDiv', data[0])
      host = data[0];
    });

  /*indexByRole = await fetch(URLIndexByRole, getOptions)
    .then(res => res.json())
    .then(data => {
      ownerRole = data.current_user.index;
      makeElement('resultDiv', ownerRole)
    });*/
  //console.log( ownerRole )
  //return ownerRole;
});


function  makeElement(parentId, value) {
  let parent = document.getElementById(parentId)
  let child = document.createElement('span')
  child.textContent = value;
  parent.appendChild(child);
}

function  getUuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

class MapStr {
  constructor() {
    this.name = 'NBL_Postman_Map99';
    this.type = 'MAP_TYPE_GEO';
    this.position = {
      x: localStorage.getItem('longitude'),
      y: localStorage.getItem('latitude')
    };
    this.zoom = 17;
    this.provider_id = providerID
  }
}

class MapObj {
  constructor() {
    this.id = getUuid();
    this.sharing = {
      kind: 'SHARING_KIND_NOT_SHARED',
      shared_roles: []
    };
    this.map = new MapStr;
  }
}

class ToCreate {
  constructor() {
    this.created = new MapObj;
  }
}
//bodyMap

const postOptions = {
  method: 'POST',
  mode: 'no-cors',
  credentials: 'include',
  headers: {
    Authorization: 'Basic ' + btoa(USER + ':' + PASS),
    ContentType: 'application/json',
  },
  body: JSON.stringify(new ToCreate)
}


createMapButton.addEventListener("click", async function() {
  map = await fetch(URLcreateMap, postOptions)
    .then(res =>
      fetch(URLmaplist, getOptions)
      .then(res => res.json())
      .then(data => makeElement('resultDiv', data.items[0].meta.id))
      )
});


addingMarkersButton.addEventListener("click", async function() {
  mapList = await fetch(URLmaplist, getOptions)
    .then(res => res.json())
    .then(data =>
      data.items[0].meta.id)
  makeElement('resultDiv', mapList);
});

var geoPosition

document.getElementById('getGeolocation').addEventListener("click", function() {
  //(navigator.geolocation)?console.log('DONE'):console.log('fail');
  function success (position) {
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    localStorage.setItem('longitude', position.coords.longitude);
    localStorage.setItem('latitude', position.coords.latitude);
    makeElement('resultDiv', longitude + '  ')
    makeElement('resultDiv', latitude)
  }

  function error (error) {
    console.log(error)
  }

  geoPosition = navigator.geolocation.getCurrentPosition(success,  error  )
});

let toDeleteMaps = [];

function selectID(e) {
  value = e.meta.id;
  toDeleteMaps.push(JSON.stringify(value));
}


class ToDelete {
  constructor() {
    this.removed = [toDeliteMaps];
  }
}

const postDelOptions = {
  method: 'POST',
  mode: 'no-cors',
  credentials: 'include',
  headers: {
    Authorization: 'Basic ' + btoa(USER + ':' + PASS),
    ContentType: 'application/json',
  },
  body: JSON.stringify(new ToDelete)
}

removeMapsButton.addEventListener("click", async function() {
  mapList = await fetch(URLmaplist, getOptions)
    .then(res => res.json())
    .then(data =>
      toDeleteMaps = data.items[0].meta.id)
});

//ToDO
//firstChild
document.getElementById('barrelButton').addEventListener("click", function() {
  while (resultDiv.firstChild) {
    resultDiv.removeChild(resultDiv.lastChild);
  }
})
