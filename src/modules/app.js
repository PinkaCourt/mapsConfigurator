import React, {Component} from 'react';
import Step from './Step.js'
import Form from './Form.js'
import {log} from '../func/cameras.js'
import {getHost} from '../func/cameras.js'
import {GetOptions} from '../func/httpapi.js'
// to delete
import {IP} from '../constants/input.js'
import {PORT} from '../constants/input.js'
import {AUTH} from '../constants/input.js'
const URL = 'http://' + IP + ':' + PORT
const URLhosts = URL + '/hosts'
// to delete


class App extends Component {
  state = {
    steps: [
      {id:'createMap', buttonID: 'createMapButton', value: 'To create Map'},
      {id:'geolocation', buttonID: 'getGeolocation', value: 'Get Geolocation'},
      {id:'maplist', buttonID: 'maplistButton', value: 'Map List'},
      {id:'removeMaps', buttonID: 'removeMapsButton', value: 'Remove Maps'},
      {id:'Cameras', buttonID: 'getCamerasbutton', value: 'Get cameras'},
      {id:'AddingCameras', buttonID: 'addCamerasOnMap', value: 'Adding markers on map'},
      {id:'resultDiv', buttonID: 'barrelButton', value: 'do a barrel roll'}
    ],
    forms: [
      {id:'IP', value: '192.168.1.36'},
      {id:'PORT', value: '8001'},
      {id:'USER', value: 'root'},
      {id:'PASS', value: 'root'}
    ]
  }
/*
пнем хосты ручками
handleClick - это событие реакта. 
бля
*/

  handleClick(AUTH) {
    getHost(AUTH);
  }

  render() {
    return (
      <div>
        <fieldset className="step input" id="input">
        <legend>Данные сервера</legend>
        {this.state.forms.map((e, index) => {
          return (
            <Form 
              key = {index}
              id = {e.id}
              value = {e.value}  
              />
          )
        })}
        <button onClick={this.handleClick.bind(this, AUTH)} className="button" id="getHost"> GET HOST </button>
        </fieldset>

        {this.state.steps.map((e, index) => {
          return (
            <Step 
              key = {index}
              id = {e.id}
              buttonID = {e.buttonID}
              value = {e.value}  
              />
          )
        })}
      </div>
      );
  }
}

export default App;

