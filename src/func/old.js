//хз. работает или нет
/*
  export function setUserLocation() {
    navigator.geolocation.getCurrentPosition(position => {
       let setUserLocation = {
           lat: position.coords.latitude,
           long: position.coords.longitude
        };
       let newViewport = {
          height: "400",
          width: "400",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: [8],
          renderChildrenInPortal: true,
        };
        this.setState({
          viewport: newViewport,
          userLocation: setUserLocation
       });
    });
  };
*/

// это работает! не трогай
/*
export async function getHost (AUTH) {
	let host = await fetch(URLhosts, new GetOptions(AUTH))
    .then(res => res.json())
    .then(data => {data[0]})
}
*/



  /*  
  await fetch(URLchangeMap, new PostOptions(AUTH, new ToChangeGeoMap(map, markersforMap)))
    .then(res => res.json())

  }
*/


  /*
   render() {
    return (
      <ul className="camera_list">
        <div className="buttonForCameraList">
        <button onClick={this.handleGetCameras.bind(this, AUTH)} className="button"> GET Camera list </button>

        </div>

        {this.state.data.map((e) => {
          return (
            <CameraItem 
              key = {e.displayId}
              id = {e.displayId}
              name = {e.displayName}  
              />
          )
        })
        }
      </ul>

      );
  } 
  */


  /* функция под мапу
  	fetchAll = async () => {
		const {camerasMap} = this.state;

		if (!camerasMap.size) {
			const res = await getCameras(AUTH);
			//console.log('res ' + JSON.stringify(res));
			const result = {
				displayId: res.displayId,
				displayName: res.displayName,
			};
			console.log('result ' + JSON.stringify(result));

			const camMap = result;

			const cameras = Array.from(camMap.values());
			this.setState({cameras, camerasMap: camMap, loading: false});
		}
	}
*/


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


//функция под мапу

/*
export async function getCameras (AUTH) {
	let res = {
		displayId: [],
		displayName: [],
	}

	let cameras;
	
	await fetch(URLcameraList, new GetOptions(AUTH))
		.then(result => result.json())
		.then(data => cameras = data.cameras)

	//console.log( 'cameras: ' + JSON.stringify(cameras));
	while (cameras.length) {
		const camera = cameras.shift();
		res = {
			displayId: res.displayId.concat(camera.displayId),
			displayName: res.displayName.concat(camera.displayName),
			};
	}
	//console.log( 'res: ' + JSON.stringify(res));
	return res;
}
*/

/*

class VideoFrameArrangement {
    constructor() {
      this.incline = 0;
      this.distance = 0;
      this.angle = 0
    }
}

class FieldOfView {
    constructor() {
      this.angle = 50;
      this.direction = {
        x: 0,
        y: 60
      };

    }
}
*/

//import {updateMarkers} from './methods.js'

/*
export class Data {
    constructor(geoMapID, xCoord, yCoord, host, cameraID) {
        this.method = updateMarkers;
        this.data = {
            changed : {
              map_id: geoMapID,
              updated: {
              position : {
                x: xCoord,
                y: yCoord
              },
              component_name : 'hosts/' + host + '/DeviceIpint.' + cameraID + '/SourceEndpoint.video:0:0',
              display_title : true,
              camera_marker : {
                field_of_view: new FieldOfView,
                video_frame_arrangement: new VideoFrameArrangement
              }
            }
          }
          }
        }
    }


    export function selectID(e) {
        let value = e.meta.id;
        return value;
      }
    
    export function selectCameraID(e) {
      let camera = {
        id:'',
        name:''
      };
      let displayId = e.displayId;
      let displayName = e.displayName;
      camera.id = displayId;
      camera.name = displayName;
      return camera;
      }

      */



      /*
ReactDOM.render(
  <React.StrictMode>
    <ToolBar/>
  </React.StrictMode>,
  document.getElementById('topbar')
);
*/
//CameraList




/*
document.getElementById('getGeolocation').addEventListener("click", function() {
  function success (position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    localStorage.setItem('longitude', position.coords.longitude);
    localStorage.setItem('latitude', position.coords.latitude);
  }

  function error (error) {
    console.log(error)
  }
  let geoPosition = navigator.geolocation.getCurrentPosition(success,  error  )
});
*/



/*
addCamerasOnMap.addEventListener("click", async function() {
  console.log(mathSymbolRandom(randomDelta(), 1));

  let x = localStorage.getItem('longitude');
  let y = localStorage.getItem('latitude')

  let request = await fetch(URLgRPC, new PostOptions(AUTH, new Data( '67364835-3908-47e4-b894-64915cff2476' , x, y, 'COURT', 1)))
    .then(res => res.json())

  makeElement('resultDiv', 'ok'); 
});

*/