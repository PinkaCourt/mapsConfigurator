import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl} from 'react-mapbox-gl';
import PopSnapshot from './PopSnapshot.jsx'

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGlua2Frb3J0IiwiYSI6ImNrM29ueHE1djF2bjEzZnJrbHU4b2h2aDMifQ.wGdsYfdCfpw7pbpva8-Qmw';

const Map = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN,
  });

const STYLEMAP ='mapbox://styles/mapbox/streets-v11';

class MapImg extends Component {
    constructor(props) {
    super(props);
    }

  render() {
    console.log('this.props', this.props)
      if (!this.props.activeMap.id) {
        return <div></div>
      } else {
        let activeMap = this.props.activeMap;
        return (
          <div className="map_container">
          <Map
              style={STYLEMAP} 
              center={[activeMap.position.x,  activeMap.position.y]}
              zoom={[activeMap.zoom]}
              containerStyle={{
                  height: '100%',
                  width: '100%'
                  }}

            >
            <Layer
              type="symbol"
              layout={{ "icon-image": "marker-15" }}>
            
              {this.props.markers.map((e) => {
                return (
                  <Feature
                    key = {e.accessPoint}
                    coordinates={[e.position.x , e.position.y]}
                    draggable = {true}
                    onClick={() => this.props.onMarkerClick(
                      e.accessPoint, 
                      e.position
                      )}
                  >
                  </Feature>
                      )
                  })
                }
              </Layer>
              {this.props.selectMarker 
                ? (<PopSnapshot 
                    selectMarker = {this.props.selectMarker}
                    onClick={this.props.onClose}
                    />) 
                : null}

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