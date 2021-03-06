import React, {Component} from 'react';
import MapImg from './Mapimg/Mapimg.jsx'
import MapNavBar from './navbar/MapNavBar.jsx'
import {getMaps} from './func.js'
import {getMapsMarkers} from './func.js'
import {createMap} from './func.js'
import {deleteMap} from './func.js'
import {getUuid} from './func.js'
import {changeMapMarkers} from './func.js'
import {coordinateRandom} from '../../func/random.js'
import ToolBar from './topbar/ToolBar.jsx'
import {getCameras} from '../cameralist/func.js'
import {getCameraInfo} from './func.js'
import {getCameraSnapshot} from './func.js'



class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maps: [],
      displayNew: false,
      activeMap: {},
      markers: [],
      selectMarker: null
      }
  }

  componentDidMount() {
    this.fetchAll();
    }

  fetchAll = async () => {
    const {maps} = this.state;

    if (!maps.length) {
      const maps = await getMaps();
      this.setState({maps});
    }
  }
  
  onSelectMapBookmarkHandler = async (id, etag, name, position, zoom) => {
    const markers  = await getMapsMarkers(id);
    let activeMap = {
      id: id,
      etag: etag,
      name: name,
      position: position,
      zoom: zoom,
    };
    this.setState({activeMap});
    this.setState({markers});
    this.setState({
      displayNew: false
    }); 
    this.setState({
      selectMarker: null
    });
    //console.log( 'this.activeMap', this.state.activeMap);
  }

// только Москва, только хардкор
  CreateNewMapHandler = () => {
      //console.log('navigator.geolocation');
      let number = this.state.maps.length + 1; 
      let activeMap = {
        id: getUuid(),
        etag: '',
        position: {
          'x': 37.615560,
          'y': 55.752220
        },
        zoom: 10,
        name: `New Map ${number}`,
        };
      let markers = [];

      this.setState({activeMap});
      this.setState({markers});
      this.setState({
        displayNew: true
      });   
  }

  addAllCamerasOnMapHandler = async () => {
    const mapPosition = this.state.activeMap.position;
    //console.log('mapPosition', mapPosition);
    //let mapID = this.state.activeMap.id

    let cameras = await getCameras();
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
    //console.log('markers', markers);


    this.setState({markers});
    //console.log('this.state.markers', this.state.markers);
  }

  saveChangesHandler = async () => {
    const map = this.state.activeMap;
    const markers = this.state.markers;

    this.state.displayNew 
      ? await createMap(map, markers)
      : await changeMapMarkers(map, markers);

    const maps = await getMaps();
    this.setState({maps});

  }

  cancelChangesHandler = () => {
    console.log ('cancelChangesHandler')
  }

  deleteMapHandler = async () => {
    await deleteMap(this.state.activeMap.id);
    const maps = await getMaps();
    this.setState({maps});
    //выбираться должна другая карта
        
    let activeMap = {
      id: null,
      position: {},
      etag: '',
      zoom: null,
      name: '',
      };
    this.setState({activeMap});
    //надо добавить загрузку
  }

  selectMarkerHandler = async (accessPoint, position) => {
    //console.log ('selectMarkerHandler')
    let camera =  await getCameraInfo(accessPoint);
    let snapshot = getCameraSnapshot(accessPoint);
    console.log(snapshot)
    const selectMarker = {
      accessPoint: accessPoint,
      cameraID: camera.displayId,
      cameraName: camera.displayName,
      isActivated: camera.isActivated,
      position: position,
      snapshot: snapshot,
    }
    this.setState({selectMarker});
    console.log( selectMarker , this.state.selectMarker)
  }

  render() {
     return (
      <div className="map_wrapper">
        <ToolBar 
          onCreateNewMapClick = {this.CreateNewMapHandler}
          addAllCamerasOnMapClick = {this.addAllCamerasOnMapHandler}
          deleteMapClick = {this.deleteMapHandler}
          saveChangesClick = {this.saveChangesHandler}
          cancelChangesClick = {this.cancelChangesHandler}
          displayNew={this.state.displayNew}
          activeMap={this.state.activeMap}
          />
        <MapImg
          activeMap={this.state.activeMap}
          markers={this.state.markers}
          selectMarker={this.state.selectMarker}
          onMarkerClick= {this.selectMarkerHandler}
          onClose={() => this.setState({activeMap: null})}
        /> 
        {this.state.maps.length 
          ? (<MapNavBar maps={this.state.maps} 
                        activeMap = {this.state.activeMap}
                        onMapClick = {this.onSelectMapBookmarkHandler}
                        />) 
          : null}
        
      </div>
      );
    }
}

export default Map;
