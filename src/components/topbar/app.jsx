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

export default class App extends Component {

  async handleClick(AUTH) {
    const res = await fetch(URLhosts, new GetOptions(AUTH))
    const json = await res.json();
    console.log(json); 
    //this.setState({ hosts: json });
  }
  
  state = {
    buttons: [
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
    ],
    hosts:[]
  }
/*
пнем хосты ручками
handle(Click) - это событие реакта. 
в данном случае функция прослушки события - кликнули на кнопку- вызвали функцию
бля
*/
/*
async handleClick(AUTH) {
    const res = await fetch(URLhosts, new GetOptions(AUTH))
    const json = await res.json();
    console.log(json); 
    //this.setState({ hosts: json });
  }
*/
  render() {
    return (
      <div className="topbar_wrapper"> 
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
        <div className="hosts_list">
          {this.state.hosts.map((e, index) => (
            <span> {e} </span>
          ))}
          </div>
        </fieldset>
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

//export default App;

