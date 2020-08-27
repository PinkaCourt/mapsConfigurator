import {URLmaplist} from '../../constants/url.js'
import {URLchangeMap} from '../../constants/url.js'
import {URLMapMarkers} from '../../constants/url.js'
import {URLMapMarkersUpdate} from '../../constants/url.js'
import {URLCameraSnapshot} from '../../constants/url.js'
import {URLCameraInfo} from '../../constants/url.js'

import {GetOptions} from '../../func/httpapi.js'
import {PostOptions} from '../../func/httpapi.js'


import {ToCreateGeoMap} from '../../func/bodys.js'
import {ToDeleteMap} from '../../func/bodys.js'
import {MapMarkers} from '../../func/bodys.js'
//import {ToChangeGeoMap} from '../../func/bodys.js'
import {ToChangedMarkers} from '../../func/bodys.js'

export async function getMaps(AUTH) {
  let maps = [];
  let dataMaps;
  await fetch(URLmaplist, new GetOptions(AUTH))
   .then(res => res.json())
   .then(data => {dataMaps = data.items}
      )
  dataMaps.map(item => {
    //console.log('item.meta.etag' , item.meta.etag)
    const map = {
      etag: item.meta.etag,
      name: item.data.name,
      id: item.meta.id,
      position: item.data.position,
      zoom: item.data.zoom,
      };
    maps.push(map);
    })
  
    return maps;
  }

export function  getUuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

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
      accessPoint: e.component_name,
      position: {
        y: e.position.y ,
        x: e.position.x
        },
      };

    markers.push(marker);
    })
    return markers;
  }


export async function createMap(AUTH, map, markers) {
  let markersforMap = [];

  markers.map((e)=>{
    let marker = {
      position: e.position,
      component_name: e.accessPoint,
      display_title: true,
      camera_marker: {
        field_of_view: {
            angle: 50,
            direction: {
                x: 0,
                y: 60
            }
        },
        video_frame_arrangement: {
            incline: 0,
            distance: 0,
            angle: 0
        }
      }
    };
    markersforMap.push(marker)
  })

  await fetch(URLchangeMap, new PostOptions(AUTH, new ToCreateGeoMap(map, markersforMap)))
    .then(res => res.json())
}

export async function changeMapMarkers(AUTH, map, markers) {
  let markersforMap = [];
  console.log(AUTH, map, markers)

  markers.map((e)=>{
    let marker = {
      position: e.position,
      component_name: e.accessPoint,
      display_title: true,
      camera_marker: {
        field_of_view: {
            angle: 50,
            direction: {
                x: 0,
                y: 60
            }
        },
        video_frame_arrangement: {
            incline: 0,
            distance: 0,
            angle: 0
        }
      }
    };
    markersforMap.push(marker)
  })

  await fetch(URLMapMarkersUpdate, new PostOptions(AUTH, new ToChangedMarkers(map, markersforMap)))
  .then(res => res.json())
  }


export async function deleteMap(AUTH, mapID) {
  await fetch(URLchangeMap, new PostOptions(AUTH, new ToDeleteMap(mapID)))
  }


export function getCameraSnapshot(accessPoint) {
  const VIDEOSOURCEID = accessPoint.replace(/hosts\//, '');
  return URLCameraSnapshot + VIDEOSOURCEID;
  }

export async function getCameraInfo(AUTH, accessPoint) {
  const URL = URLCameraInfo + accessPoint;
  let camera = {};
    await fetch(URL, new GetOptions(AUTH))
    .then(res => res.json())
    .then(data => camera = data.cameras[0])
  return camera;
  }
  
/*

export async function gatCameraSnapshot(AUTH, accessPoint) {
  const VIDEOSOURCEID = accessPoint.replace(/hosts\//, '');
  const URL = URLCameraSnapshot + VIDEOSOURCEID;
    await fetch(URL, new GetOptions(AUTH))
    }
*/
  