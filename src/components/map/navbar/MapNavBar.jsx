import React, {Component} from 'react';
import MapItem from './MapItem.jsx'

class MapNavBar extends Component {
  constructor(props) {
    super(props);
    };


  render() {
      return (
        <div className="map_toolbar">
          {this.props.maps.map((e, index) => {
            return (
              <MapItem
                  key = {index}
                  name = {e.name}
                  position = {e.position}
                  zoom = {e.zoom}
                  id = {e.id}
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
