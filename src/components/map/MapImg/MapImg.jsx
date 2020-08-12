import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature, } from 'react-mapbox-gl';
import {setUserLocation} from '../func.js'
import CameraMarker from './Marker.jsx'

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGlua2Frb3J0IiwiYSI6ImNrM29ueHE1djF2bjEzZnJrbHU4b2h2aDMifQ.wGdsYfdCfpw7pbpva8-Qmw';

const Map = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN,
  });

//const ICON = 'https://image.flaticon.com/icons/svg/2196/2196761.svg';

class MapImg extends Component {
    constructor(props) {
    super(props);
    }

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

/*
  componentDidMount() {
    this.setUserLocation();
    }

    componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.longitude, this.state.latitude],
      zoom: this.state.zoom
      });
	  }

    /*
     componentDidMount() {
      this.fetchAll();
      }

  	fetchAll = async () => {
		const {cameras} = this.state;

		if (!cameras.length) {
			const res = await getCameras(AUTH);
			//console.log('res ' + JSON.stringify(res));
			const cameras = res;
			this.setState({cameras});
		}
	}
    */
    render() {
      return (
        <Map
            style="mapbox://styles/mapbox/streets-v8" 
            center={[this.state.viewport.latitude,  55.75222]}
            zoom={this.state.viewport.zoom}
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

          {this.state.viewport.markers.map((e, index) => {
            //console.log('e: ' + e);
            return (
              <CameraMarker 
                coordinates = {e} 
                key = {index}
                />
            )
          })
        }
        </Layer>
      </Map>
        )
      }
  }

/*

https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md
*/

export default MapImg;

/*
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[37.61560, 55.75225]} />
          <Marker
            coordinates={[37.61860, 55.74325]}
            anchor="bottom">
            <img src={ICON}/>
          </Marker>


        </Layer>

*/



/*
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Marker
            coordinates={[37.62860, 55.64325]}
            anchor="bottom"        
            style={{
              width:'16px',
              height:'16px',
          }}
            >
              <img src={ICON}/>
          </Marker>


        </Layer>

*/