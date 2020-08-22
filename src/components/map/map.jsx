import React, {Component} from 'react';

import MapImg from './Mapimg/Mapimg.jsx'
import MapNavBar from './navbar/MapNavBar.jsx'
import {getMaps} from './func.js'
import {getMapsMarkers} from './func.js'
import {getUuid} from './func.js'
import {AUTH} from '../../constants/input.js'
import {coordinateRandom} from '../../func/random.js'
import ToolBar from './topbar/ToolBar.jsx'
import {getCameras} from '../cameralist/func.js'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maps: [],
      displayNew: false,
      activeMap: {},
      markers: [],
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
    };
    this.setState({activeMap});
    this.setState({markers});
  }

// только Москва, только хардкор
  CreateNewMapHandler = () => {
      //console.log('navigator.geolocation');
      let activeMap = {
        id: getUuid(),
        position: {
          'x': 37.615560,
          'y': 55.752220
        },
        zoom: [10],
        name: 'new map',
        };
      let markers = [];

      this.setState({activeMap});
      this.setState({markers});
      this.setState({
        displayNew: !this.state.displayNew
      });   
  }

  addAllCamerasOnMapHandler = async () => {
    const mapPosition = this.state.activeMap.position;
    //console.log('mapPosition', mapPosition);
    let mapID = this.state.activeMap.id

    let cameras = await getCameras(AUTH);
    let markers = [];

    cameras.map( e => {
      let cameraGeo;
      // надо переписать
      if ((e.latitude !== '0,000000' && e.longitude !== '0,000000') &&
          (e.latitude.length && e.longitude.length )) {
        cameraGeo = {
          accessPoint: e.videoStreams[0].accessPoint,
          cameraID: e.displayId,
          cameraName: e.displayName,
          position: {
            x: parseFloat(e.longitude.replace(',', '.')),
            y: parseFloat(e.latitude.replace(',', '.')),
          },
        }
        markers.push(cameraGeo);
      } else {
        cameraGeo = {
        accessPoint: e.videoStreams[0].accessPoint,
        cameraID: e.displayId,
        cameraName: e.displayName,
        position: {
          x: coordinateRandom(mapPosition.x),
          y: coordinateRandom(mapPosition.y),
        }
          };
          markers.push(cameraGeo)
        }
    })
    // это по сути массив маркеров
    //console.log('markers', markers);
    this.setState({markers});
    console.log('markersforMap.markers', this.state.markers);
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
          markers={this.state.markers}
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

  /*
      navigator.geolocation.getCurrentPosition(position => {
         let setUserLocation = {
             lat: position.coords.latitude,
             long: position.coords.longitude
          };
        console.log('longitude' , position.coords.longitude)
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
      });*/