import React, {Component} from 'react';

import CreateNewMapButton from './buttons/CreateNewMapButton.jsx'
import AddCamerasOnMapBatton from './buttons/AddCamerasOnMapBatton.jsx'
import SaveButton from './buttons/SaveButton.jsx'
import CancelButton from './buttons/CancelButton.jsx'
import RemoveMapButton from './buttons/RemoveMapButton.jsx'

export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    //console.log(this.props)
    return (
      <div className="map--topbar">
          <CreateNewMapButton 
            onCreateNewMapClick={this.props.onCreateNewMapClick}
            />
          <AddCamerasOnMapBatton
            addAllCamerasOnMapClick={this.props.addAllCamerasOnMapClick}
            />
          {!this.props.displayNew && this.props.activeMap.id
            ? (<RemoveMapButton
              deleteMapClick={this.props.deleteMapClick}
              />) 
            : null}
          
          <SaveButton
            saveChangesClick={this.props.saveChangesClick}
            />
          <CancelButton
            cancelChangesClick={this.props.cancelChangesClick}
            />
      </div>
      );
  }
}

