//эта не готова
import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import MapBookMarks from './navbar/MapBookMarks.jsx'
import {GetOptions} from '../../func/httpapi.js'
//import classes  from './map.module.css'
//import classes from './map.css'
//console.log(classes); 

import {AUTH} from '../../constants/input.js'
import {URLmaplist} from '../../constants/url.js'



//const

const styles = {
	map_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
	map_container: {
    backgroundColor: '#337361',
    height: '300px',
  },
	map_toolbar: {
		display: 'flex',
    backgroundColor: '#334361',
    height: '30px',
	},
};

const Mapimg = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoicGlua2Frb3J0IiwiYSI6ImNrM29ueHE1djF2bjEzZnJrbHU4b2h2aDMifQ.wGdsYfdCfpw7pbpva8-Qmw'
});



class Map extends Component {
  state = {
    maps: []
  }


  async handleGetMaps(AUTH) {
    const res = await fetch(URLmaplist, new GetOptions(AUTH))
    const json = await res.json();
    this.setState({ maps: json.items });
  }

  render() {
    /*const styles = {
      map_wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      },
      map_container: {
        backgroundColor: '#337361',
        height: '300px',
      },
      map_toolbar: {
        display: 'flex',
        backgroundColor: '#334361',
        height: '30px',
        justifyContent: 'flex-start',
      },
    };



    /*const {
			classes,
      } = this.props;
    */
    return (
      <div style={styles.map_wrapper}
        className="map_wrapper">
        <div style={styles.map_container} className="map_container">
          ТУТ БУДЕТ КАРТА
          <Mapimg
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '100vh',
                width: '100vw'
              }}
            >
              <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
              </Layer>
            </Mapimg>;



          </div>
        <div style={styles.map_toolbar} 
          className="map_toolbar">
          <button onClick={this.handleGetMaps.bind(this, AUTH)} className="button"> GET MAPS </button>
          {this.state.maps.map((e) => {
            return (
              <MapBookMarks 
                key = {e.meta.id}
                name = {e.meta.name}
                /* 
                position = {e.data.position}
                //или 
                position.x = {e.data.position.x}
                position.y = {e.data.position.y}
                
                */
                />
            )
          })}
          </div>

      </div>
      );
  }
}

export default Map;
