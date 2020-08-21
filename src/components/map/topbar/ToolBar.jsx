import React, {Component} from 'react';
import Button from './buttons/Button.jsx'
import CreateNewMapButton from './buttons/CreateNewMapButton.jsx'
import AddCamerasOnMapBatton from './buttons/AddCamerasOnMapBatton.jsx'
import {log} from '../../../func/cameras.js'
import {getHost} from '../../../func/cameras.js'
import {GetOptions} from '../../../func/httpapi.js'
// to delete
import {IP} from '../../../constants/input.js'
import {PORT} from '../../../constants/input.js'
import {AUTH} from '../../../constants/input.js'
import {URL} from '../../../constants/url.js'
import {URLhosts} from '../../../constants/url.js'

export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    }
/*
  async handleClick(AUTH) {
    const res = await fetch(URLhosts, new GetOptions(AUTH))
    const json = await res.json();
    console.log(json); 

  }
  */
  state = {
    buttons: [
      //{value: 'To create Map'},
      {value: 'Get Geolocation'},
      {value: 'Remove Maps'},
      //{value: 'Korean random'},
      {value: 'do a barrel roll'}
    ],
    hosts:[]
  }

  newHost = React.createRef();

  render() {
    return (
        <div className="map--topbar">
          <CreateNewMapButton 
            onCreateNewMapClick={this.props.onCreateNewMapClick}
            />
          <AddCamerasOnMapBatton
            addAllCamerasOnMapClick={this.props.addAllCamerasOnMapClick}
            />
          {this.state.buttons.map((e, index) => {
            return (
              <Button 
                key = {index}
                value = {e.value}  
                />
            )
          })}
      </div>
      );
  }
}

