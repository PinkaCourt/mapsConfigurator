//эта не готова
import React, {Component} from 'react';
import { Layer, Feature } from 'react-mapbox-gl';
import MapImg from './Mapimg/Mapimg.jsx'
import MapBookMarks from './navbar/MapBookMarks.jsx'
import {GetOptions} from '../../func/httpapi.js'
import {getMaps} from './func.js'
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

class Map extends Component {
  constructor(props) {
    super(props);
    /*this.iframe = React.createRef();*/
    }
  state = {
      maps: [],
    };

  componentDidMount() {
      this.fetchAll();
      }

  fetchAll = async () => {
      const {maps} = this.state;

      if (!maps.length) {
        const res = await getMaps(AUTH);
        //console.log('res ' + JSON.stringify(res));
        const maps = res;
        this.setState({maps});
      }
    }
  /*async handleGetMaps(AUTH) {
    const res = await fetch(URLmaplist, new GetOptions(AUTH))
    const json = await res.json();
    this.setState({ maps: json.items });
  }
*/
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
          </div>
        <div style={styles.map_toolbar} 
          className="map_toolbar">
          {this.state.maps.map((e) => {
            return (
              <MapBookMarks 
                key = {e.meta.id}
                name = {e.meta.name}
                /* 
                position = {e.data.position}
                position.x = {e.data.position.x}
                position.y = {e.data.position.y}
                */
                />
            )
          })}
          </div>
      </div>
      );


     //что б карта не мешалась
     /*
     return (
      <div style={styles.map_wrapper}
        className="map_wrapper">
        <div style={styles.map_container} className="map_container">
          ТУТ БУДЕТ КАРТА
          
          <MapImg
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: '100%',
              width: '100%'
            }}
          >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
              <Feature coordinates={[55.609928131103516, 37.590171813964844]} />
            </Layer>
          </MapImg>;
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
                
                
                />
            )
          })}
          </div>

      </div>
      );*/
  }
}

export default Map;
