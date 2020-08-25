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
      if (!this.props.activeMap.id) {
        return <div></div>
      } else {
        let mapProps = this.props.activeMap;
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
            >

              {this.props.markers.map((e) => {
              return (
                <Marker
                  key = {e.accessPoint}
                  coordinates={[e.position.x , e.position.y]}
                  anchor="top"
                   >
                  <img src={markerUrl}/>
                  <h5>{e.cameraName} {' '} {e.cameraName}</h5>

                </Marker>
              )
                })
                }

              <ZoomControl
                position = 'top-left'
                />

            </Map>
          </div>
        )
      }
    } 
}

export default MapImg;
