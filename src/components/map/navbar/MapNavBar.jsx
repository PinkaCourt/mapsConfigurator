import React, {Component} from 'react';
import MapItem from './MapItem.jsx'

class MapNavBar extends Component {
  constructor(props) {
    super(props);
    };


  render() {
    console.log('activeMap' , this.props.activeMap)
      return (
        <div className="map_toolbar">
          {this.props.maps.map((e) => {
            return (
              <MapItem
                  id = {e.id}
                  etag = {e.etag}
                  name = {e.name}
                  position = {e.position}
                  zoom = {e.zoom}
                  key = {e.id}
                  onMapClick={this.props.onMapClick}
                  activeMap={this.props.activeMap}
                  />
              )
            })
          }
          </div>
      )
  };
}

export default MapNavBar;
