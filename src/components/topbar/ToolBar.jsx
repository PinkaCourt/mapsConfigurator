import React, {Component} from 'react';
import Button from './buttons/Button.jsx'
import Form from './Form.jsx'
import {log} from '../../func/cameras.js'
import {getHost} from '../../func/cameras.js'
import {GetOptions} from '../../func/httpapi.js'
// to delete
import {IP} from '../../constants/input.js'
import {PORT} from '../../constants/input.js'
import {AUTH} from '../../constants/input.js'
import {URL} from '../../constants/url.js'
import {URLhosts} from '../../constants/url.js'

export default class ToolBar extends Component {

  async handleClick(AUTH) {
    const res = await fetch(URLhosts, new GetOptions(AUTH))
    const json = await res.json();
    console.log(json); 

  }
  
  state = {
    buttons: [
      {id:'createMap', buttonID: 'createMapButton', value: 'To create Map'},
      {id:'geolocation', buttonID: 'getGeolocation', value: 'Get Geolocation'},
      {id:'removeMaps', buttonID: 'removeMapsButton', value: 'Remove Maps'},
      {id:'AddingCameras', buttonID: 'addCamerasOnMap', value: 'Adding markers on map'},
      {id:'resultDiv', buttonID: 'barrelButton', value: 'do a barrel roll'}
    ],
    forms: [
      {id: 'IP', value: '192.168.1.36'},
      {id:'PORT', value: '8001'},
      {id:'USER', value: 'root'},
      {id:'PASS', value: 'root'}
    ],
    hosts:[]
  }

  newHost = React.createRef();

  render() {
    return (
      <div className="topbar_wrapper"> 
        <Form />
        <div className="button_list">
          {this.state.buttons.map((e, index) => {
            return (
              <Button 
                key = {index}
                id = {e.id}
                buttonID = {e.buttonID}
                value = {e.value}  
                />
            )
          })}
          </div>
      </div>
      );
  }
}

