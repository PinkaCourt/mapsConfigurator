import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature, Marker} from 'react-mapbox-gl';
import {setUserLocation} from '../func.js'
//import CameraMarker from './Marker.jsx'


const MAPBOX_TOKEN = 'pk.eyJ1IjoicGlua2Frb3J0IiwiYSI6ImNrM29ueHE1djF2bjEzZnJrbHU4b2h2aDMifQ.wGdsYfdCfpw7pbpva8-Qmw';

const Map = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN,
  });

const STYLEMAP ="mapbox://styles/mapbox/streets-v8";
const markerUrl = 'https://image.flaticon.com/icons/svg/2196/2196761.svg';
class MapImg extends Component {
    constructor(props) {
    super(props);
    }

  /*state = {
    viewport: {},
    userLocation: {}
  };*/

  /*
  
    state = {
    viewport: {
        width: 400,
        height: 400,
        latitude: 37.61556, //Долгота y
        longitude: 55.75222, //Широта x
        zoom: [10],
       // renderChildrenInPortal: true,
        markers:[[37.65860, 55.64225],[37.61870, 55.74335]],
        
    },
    userLocation: {}
  };
  
  */

    render() {
      console.log('props Map: ' , this.props)
      if (!this.props.activeMap.id) {
        return <div></div>
      } else {
        let mapProps;
        this.props.newMap.display ? mapProps = this.props.newMap : mapProps = this.props.activeMap;   

        return (
          <div className="map_container">
          <Map
              style={STYLEMAP} 
              center={[mapProps.position.x,  mapProps.position.y]}
              zoom={mapProps.zoom}
              containerStyle={{
                  height: '100%',
                  width: '100%'
                  }}
              mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <Layer 
            type="symbol"
            id="markerLayer"
            layout={
              {'icon-image': 'attraction-11'}
              }>

            {mapProps.markers.map((e, index) => {
              return (
                <Marker
                  key = {e.component_name}
                  coordinates={[e.position.x, e.position.y]}
                  anchor="bottom">
                  <img src={markerUrl}/>
                </Marker>
              )
            })
          }
          </Layer>
        </Map>
            </div>
          )
      }
       
    } 
      
  }

export default MapImg;

