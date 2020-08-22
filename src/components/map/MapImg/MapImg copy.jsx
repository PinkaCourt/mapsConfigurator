/*

import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature, Marker} from 'react-mapbox-gl';
//import {setUserLocation} from '../func.js'
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

    render() {
      console.log('props Map: ' , this.props)
      if (!this.props.activeMap.id) {
        return <div></div>
      } else {
        let mapProps = this.props.activeMap;   
        console.log('mapProps', mapProps);

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
              {'icon-image': 'harbor-15'}
              }
            >

            {mapProps.markers.map((e) => {
              return (
                <Marker
                  key = {e.accessPoint}
                  coordinates={e.position}
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
*/


/*

import React, {Component} from 'react';
//import ReactMapboxGl, { Layer, Feature, Marker , Popup} from 'react-mapbox-gl';
import ReactMapGL from 'react-map-gl';
//import {setUserLocation} from '../func.js'
//import CameraMarker from './Marker.jsx'


const MAPBOX_TOKEN = 'pk.eyJ1IjoicGlua2Frb3J0IiwiYSI6ImNrM29ueHE1djF2bjEzZnJrbHU4b2h2aDMifQ.wGdsYfdCfpw7pbpva8-Qmw';

const Map = ReactMapGL({
  accessToken: MAPBOX_TOKEN,
  });

const STYLEMAP ='mapbox://styles/mapbox/streets-v8';
const markerUrl = 'https://image.flaticon.com/icons/svg/2196/2196761.svg';

class MapImg extends Component {
    constructor(props) {
    super(props);
    }

  render() {
      //console.log('props Map: ' , this.props)
      if (!this.props.activeMap.id) {
        return <div></div>
      } else {
        let mapProps = this.props.activeMap;
          
        //console.log('mapProps', mapProps);
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
            {this.props.markers.map((e) => {
              return (
                <Layer 
                type="symbol"
                id="markerLayer"
                layout={
                  {'icon-image': 'harbor-15'}
                  }
                >
                  <Marker
                  key = {e.accessPoint}
                  coordinates={[e.position.x , e.position.y]}
                  anchor="bottom">
                  <img src={markerUrl}/>
                  <div>{e.accessPoint}</div>
                </Marker>
                  </Layer>
                 )
               })
             }

            </Map>
          </div>
          )
      }
       
    } 
      
  }

export default MapImg;


/*
крч! свой маркер появляется если в слое не задана иконка, не все иконки слоя отображаются.
автор ..... надеюсь ты не спишь ночами..... потому что сначала идет широта, а потом долгота! больной ты ублюдок

..... a нет, это в геокартах  мудаки
*/
/*

                <Marker
                  key = {e.accessPoint}
                  coordinates={[e.position.x , e.position.y]}
                  anchor="bottom">
                  <img src={markerUrl}/>
                  <div>{e.accessPoint}</div>
                </Marker>


*/

