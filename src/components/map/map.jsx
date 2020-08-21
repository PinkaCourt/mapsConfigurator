//эта не готова
import React, {Component} from 'react';
import { Layer, Feature } from 'react-mapbox-gl';
import MapImg from './Mapimg/Mapimg.jsx'
import MapNavBar from './navbar/MapNavBar.jsx'
import {GetOptions} from '../../func/httpapi.js'
import {getMaps} from './func.js'
import {getMapsMarkers} from './func.js'
import {getUuid} from './func.js'
import {AUTH} from '../../constants/input.js'
import {URLmaplist} from '../../constants/url.js'
import {mathSymbolRandom} from '../../func/random.js'
import {randomDelta} from '../../func/random.js'
import ToolBar from './topbar/ToolBar.jsx'
import {getCameras} from './cameralist/func.js'


//это высший класс со стэйтом
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maps: [],
      activeMap: {
        'id': '',
        'position': {
              'x': null,
              'y': null
            },
        'zoom': null,
        'name': '',
        'markers':[],
        },
      newMap: {
        'display': false,
        'id': '',
        'position': {
          'x': null,
          'y': null
        },
        'zoom': null,
        'name': '',
        'markers':[],
        }
      }
  }

  componentDidMount() {
    this.fetchAll();
    //this.setUserLocation();
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
  }

  CreateNewMapHandler = () => {
      console.log('navigator.geolocation');
      navigator.geolocation.getCurrentPosition(position => {
         /*let setUserLocation = {
             lat: position.coords.latitude,
             long: position.coords.longitude
          };*/
          console.log('position.coords.longitude' , position.coords.longitude)
         let newMap = {
          'display': true,
          'id': getUuid(),
          'position': {
            'x': position.coords.longitude,
            'y': position.coords.latitude
          },
          'zoom': 8,
          'name': 'new map',
          'markers':[],
          };
          let activeMap = {
            'id': '',
            'position': 
                  {'x': null,
                  'y': null},
            'zoom': null,
            'name': '',
            'markers':[],
            }

          this.setState({
            newMap, activeMap
         });
      });

/*
    this.setState({
      //display: !this.state.newMap.display,
      newMap:{display: true},
      activeMap: {
        'id': '',
        'position': 
              {'x': null,
              'y': null},
        'zoom': null,
        'name': '',
        'markers':[],
        },
    })
*/



  }


  addAllCamerasOnMapHandler = async () => {
    const mapPosition = this.state.newMap.position;
    console.log('koreanrandom');
    const mapID;
    this.state.activeMap.id ? mapID = this.state.activeMap.id :  mapID = this.state.newMap.id

    const cameras = await getCameras(AUTH);

    let camerasForMap = [];
    cameras.map = (e) => {
      let cameraGeo;
      if (e.latitude.length & e.longitude.length) {
        cameraGeo = {
          "accessPoint": e.videoStreams[0].accessPoint,
          'position': {
            'x': e.latitude,
            'y': e.longitude
            },
        }
        camerasForMap.push(cameraGeo)
      } else {
        cameraGeo = {
        "accessPoint": e.videoStreams[0].accessPoint,
        'position': {
          'x': mathSymbolRandom(randomDelta(),mapPosition.x),
          'y': mathSymbolRandom(randomDelta(),mapPosition.y),
        }
       };
       camerasForMap.push(cameraGeo)
      }
    }
    // это по сути массив маркеров
    console.log('camerasForMap', camerasForMap);
    }


//map_toolbar не должен рисоваться если карт нет (+)
  render() {
     return (
      <div className="map_wrapper">
        <ToolBar 
          onCreateNewMapClick = {this.CreateNewMapHandler}
          addAllCamerasOnMapClick = {this.addAllCamerasOnMapHandler}
          />
        <MapImg
          activeMap={this.state.activeMap}
          newMap={this.state.newMap}
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

