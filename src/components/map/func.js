import {URLmaplist} from '../../constants/url.js'
import {URLMapMarkers} from '../../constants/url.js'

import {GetOptions} from '../../func/httpapi.js'
import {PostOptions} from '../../func/httpapi.js'

import {MapMarkers} from '../../func/bodys.js'

export async function getMaps(AUTH) {
  let maps = [];
  let dataMaps;
  await fetch(URLmaplist, new GetOptions(AUTH))
   .then(res => res.json())
   .then(data => {dataMaps = data.items}
      )
  dataMaps.map(item => {
    const map = {
      'name': item.data.name,
      'id': item.meta.id,
      'position': item.data.position,
      'zoom': item.data.zoom,
      };
    maps.push(map);
    })
  
    return maps;
  }
//хз. работает или нет
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

  export async function getMapsMarkers(AUTH, mapID) {
    let markers = [];
    let dataMarkers;
    
    await fetch(URLMapMarkers, new PostOptions(AUTH, new MapMarkers(mapID)))
     .then(res => res.json())
     .then(data => {
       dataMarkers = Object.values(data.markers)
      })
    dataMarkers.map(e => {
    const marker = {
      'component_name': e.component_name,
      /*'cameraId': endpoint,*/
      'position': e.position,
      };
      markers.push(marker);
    })
    return markers;
  }



