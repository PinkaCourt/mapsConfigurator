//import {getUuid} from './getUuid.js'

export class MapProps {
    constructor(name, position, zoom) {
      this.name = name;
      this.type = 'MAP_TYPE_GEO';
      this.position = {
        x: position.x,
        y: position.y
      };
      this.zoom = zoom;
    }
  }

 export class ToDeleteMap {
    constructor(mapID) {
      this.removed = [mapID];
    }
  }
export class MapMarkers {
    constructor(mapID) {
      this.map_id = mapID;
    }
  }

export class GeoMap {
  constructor(id, name, position, zoom, markers) {
    this.id = id;
    this.map = new MapProps;
    this.markers = markers;
    }
  }
export class ToCreateGeoMap {
  constructor() {
    this.created = new GeoMap;
    }
  }