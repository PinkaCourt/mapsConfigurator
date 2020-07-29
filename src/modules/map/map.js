//эта не готова
import React, {Component} from 'react';
import MapBookMarks from './MapBookMarks.js'
import {GetOptions} from '../../func/httpapi.js'

// to delete
import {IP} from '../../constants/input.js'
import {PORT} from '../../constants/input.js'
import {AUTH} from '../../constants/input.js'
import {URLmaplist} from '../../constants/url.js'

class Map extends Component {
  state = {
    maps: []
  }


  async handleGetMaps(AUTH) {
    const res = await fetch(URLmaplist, new GetOptions(AUTH))
    const json = await res.json();
    this.setState({ maps: json.items });
  }

  render() {
    return (
      <div className="map-wrapper">
        <div className="map-container">
          ТУТ БУДЕТ КАРТА
          </div>
        <div className="map-toolbar">
          <button onClick={this.handleGetMaps.bind(this, AUTH)} className="button"> GET MAPS </button>
          {this.state.maps.map((e, index) => {
            return (
              <MapBookMarks 
                key = {index}
                name = {e.meta.name}
                />
            )
          })}
          </div>

      </div>
      );
  }
}

export default Map;
