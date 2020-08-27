import React, {Component} from 'react';

export class AddCamerasOnMapBatton extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <button
        onClick={() => this.props.addAllCamerasOnMapClick()}
          > {'Add All Cameras'} 
            </button>)
  }
}

export default AddCamerasOnMapBatton


