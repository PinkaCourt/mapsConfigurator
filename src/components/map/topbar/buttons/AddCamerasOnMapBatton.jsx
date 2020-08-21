import React, {Component} from 'react';

export class AddCamerasOnMapBatton extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    //console.log ('this.props_CreateNewMapButton' , this.props)
    return (
      <button
        onClick={() => this.props.addAllCamerasOnMapClick()}
          > {'To add cameras on map random'} 
            </button>)
  }
}

export default AddCamerasOnMapBatton


