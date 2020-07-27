//эта не готова

import React, {Component} from 'react';

//генерит только ul. Без внутренностей
import {AUTH} from '../../constants/input.js'
import {getCameras} from './func.js'
import Item from './item.js'
//console.log( 'список камер'  + getCameras(AUTH));
//const cameras = getCameras(AUTH);

class CameraListContainer extends Component {
  // state - состояние
  state = {
    /*cameras: getCameras(AUTH)*/
    cameras: [
      {id:'1', name:'camera1'},
      {id:'2', name:'camera2'}
    ]
	};

  render() {

    //const cameras = this.state.cameras;
    return (
      <ul className="camera-list">
        {this.state.cameras.map((e, index) => {
          return (
            <Item 
              key = {index}
              id = {e.id}
              name = {e.name}  
              />
          )
        })
        }
      </ul>
      );
  }
}
export default CameraListContainer;
