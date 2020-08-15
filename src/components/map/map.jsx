//эта не готова
import React, {Component} from 'react';
import { Layer, Feature } from 'react-mapbox-gl';
import MapImg from './Mapimg/Mapimg.jsx'
import MapNavBar from './navbar/MapNavBar.jsx'
import {GetOptions} from '../../func/httpapi.js'
import {getMaps} from './func.js'
import {AUTH} from '../../constants/input.js'
import {URLmaplist} from '../../constants/url.js'

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
        },
      }
  }



  /*
  constructor(props) {
    super(props);
    this.state = {
      maps: [],
      activeMap: {
        'id': '',
        'position': 'x': null,
                    'y': null,
        'zoom': null,
        },
      }
  }
  
  
  */
  componentDidMount() {
    this.fetchAll();
    }

  fetchAll = async () => {
    const {maps} = this.state;
    //console.log('length' + this.state.maps.length)

    if (!maps.length) {
      const res = await getMaps(AUTH);
      const maps = res;
      this.setState({maps});
      //console.log('this.state' + JSON.stringify(this.state))
    }
  }

  onSelectMapBookmarkHandler = (id, position, zoom) => {
    //console.log('1state: ', JSON.stringify(this.state.activeMap));
    let activeMap = {
      'id': id,
      'position': position,
      'zoom': [zoom],
    }
    //console.log('activeMap: ', activeMap.id);
    this.setState({activeMap});
    console.log('state: ', JSON.stringify(this.state.activeMap));
  }

//map_toolbar не должен рисоваться если карт нет (+)
  render() {
     return (
      <div className="map_wrapper">
        <MapImg
          id={this.state.activeMap.id}
          latitude={this.state.activeMap.position.x}
          longtitude={this.state.activeMap.position.y}
          zoom={this.state.activeMap.zoom}
          markers={[]}
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

