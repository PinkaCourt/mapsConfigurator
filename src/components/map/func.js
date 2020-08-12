import {URLmaplist} from '../../constants/url.js'
import {GetOptions} from '../../func/httpapi.js'


export async function getMaps(AUTH) {
    let maps;

    await fetch(URLmaplist, new GetOptions(AUTH))
    .then(res => res.json())
    .then(data => {maps = data.items})
    
    return maps;
  }

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