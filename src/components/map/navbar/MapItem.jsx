import React, {Component} from 'react';
class MapItem extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <li 
        className={(this.props.id === this.props.activeMap.id) ? "map_bm--active" : "map_bm"}
        onClick={() => this.props.onMapClick(
          this.props.id, 
          this.props.etag,
          this.props.name, 
          this.props.position, 
          this.props.zoom,
          )}
          >
        {this.props.name}       
        </li>
    )
  }
}
export default MapItem

