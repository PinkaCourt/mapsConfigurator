//эта не готова
import React, {Component} from 'react';
import { Layer, Feature } from 'react-mapbox-gl';
import MapImg from './Mapimg/Mapimg.jsx'
import MapNavBar from './navbar/MapNavBar.jsx'
import {GetOptions} from '../../func/httpapi.js'
import {getMaps} from './func.js'
import {getMapsMarkers} from './func.js'
import {AUTH} from '../../constants/input.js'
import {URLmaplist} from '../../constants/url.js'
import ToolBar from './topbar/ToolBar.jsx'

//это высший класс со стэйтом
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maps: [],
      activeMap: {
        'id': '',
        'position': 
              {'x': null,
              'y': null},
        'zoom': null,
        'name': '',
        'markers':[],
        },
      }
  }

  componentDidMount() {
    this.fetchAll();
    }

  fetchAll = async () => {
    const {maps} = this.state;

    if (!maps.length) {
      const maps = await getMaps(AUTH);
      this.setState({maps});
    }

  }

  onSelectMapBookmarkHandler = async (id, position, zoom, name) => {
    const markers  = await getMapsMarkers(AUTH, id);
    let activeMap = {
      'id': id,
      'position': position,
      'zoom': [zoom],
      'name': name,
      'markers': markers,
    };
    this.setState({activeMap});
    //console.log('this.state.activeMap.id', this.state.activeMap.id);
    //console.log('this.state.activeMap.name', this.state.activeMap.name);
    //console.log('this.state.activeMap.markers', this.state.activeMap.markers);
  }

  CreateNewMapHandler = () => {
    console.log('CreateNewMapHandler')
  }


//map_toolbar не должен рисоваться если карт нет (+)
  render() {
     return (
      <div className="map_wrapper">
        <ToolBar />
        <MapImg
          id={this.state.activeMap.id}
          latitude={this.state.activeMap.position.x}
          longtitude={this.state.activeMap.position.y}
          zoom={this.state.activeMap.zoom}
          markers={this.state.activeMap.markers}
      /> 
        {this.state.maps.length ? (<MapNavBar 
                                      maps={this.state.maps} 
                                      activeMap = {this.state.activeMap}
                                      onMapClick = {this.onSelectMapBookmarkHandler}
                                      />) : null}
      </div>
      );
    }
}

export default Map;

/*
const styles = {
	map_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
	map_container: {
    backgroundColor: '#337361',
    height: '100%',
  },
	map_toolbar: {
		display: 'flex',
    backgroundColor: '#334361',
    height: '30px',
	},
};

            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
              <Feature coordinates={[55.609928131103516, 37.590171813964844]} />
            </Layer>
            */

