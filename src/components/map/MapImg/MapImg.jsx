import React, {Component} from 'react';
import ReactMapGL, { Layer, Feature } from 'react-mapbox-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGlua2Frb3J0IiwiYSI6ImNrM29ueHE1djF2bjEzZnJrbHU4b2h2aDMifQ.wGdsYfdCfpw7pbpva8-Qmw';


/*{ accessToken, 
  apiUrl, 
  minZoom, 
  maxZoom, 
  hash, 
  preserveDrawingBuffer, 
  scrollZoom, 
  interactive, 
  dragRotate, 
  pitchWithRotate, 
  attributionControl, 
  customAttribution, 
  logoPosition, 
  renderWorldCopies, 
  trackResize, 
  touchZoomRotate, 
  doubleClickZoom, 
  keyboard, 
  dragPan, 
  boxZoom, 
  refreshExpiredTiles, 
  failIfMajorPerformanceCaveat,
  bearingSnap, 
  injectCSS, 
  antialias, 
  transformRequest }
*/
/*
class MapImg extends Component {
    state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: 42.4376,
        zoom: 8
      }
    };
  
    render() {
      return (
        <ReactMapGL
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100%',
                width: '100%'
                }}
            mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[`$viewport.latitude`, `$viewport.longitude`]} />
        </Layer>
      </ReactMapGL>
        
        
      );
    }
  }
*/


/*
"position": {
                    "x": 37.590171813964844,
                    "y": 55.609928131103516
                }
*/
const MapImg = ReactMapGL({
  accessToken: MAPBOX_TOKEN
});


export default MapImg;