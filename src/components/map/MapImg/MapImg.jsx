import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl, ScaleControl, RotationControl , Popup } from 'react-mapbox-gl';


const MAPBOX_TOKEN = 'pk.eyJ1IjoicGlua2Frb3J0IiwiYSI6ImNrM29ueHE1djF2bjEzZnJrbHU4b2h2aDMifQ.wGdsYfdCfpw7pbpva8-Qmw';

const Map = ReactMapboxGl({
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
              zoom={[mapProps.zoom]}
              containerStyle={{
                  height: '100%',
                  width: '100%'
                  }}
              //attributionControl= 'false' 

            >
            <Layer type="circle" id="marker" paint={{
              'circle-color': "#ff5200",
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff',
              'circle-stroke-opacity': 1
            }}>
              {this.props.markers.map((e) => {
                console.log('this.props.markers.map', e)
              return (
                <Feature
                  key = {e.accessPoint}
                  coordinates={[e.position.x , e.position.y]}
                  draggable = {true}
                  
                  >
                  <p4>{e.cameraID}</p4>

                </Feature>
              )
                })
                }
              </Layer>

              <ZoomControl
                position = 'top-left'
                />
              {/* <ScaleControl/> */}

              {/* <RotationControl/> */}

              {/* <ScaleControl/> */}

              {/* <ScaleControl/> */}

            </Map>
          </div>
        )
      }
       
    } 
 
}

export default MapImg;
