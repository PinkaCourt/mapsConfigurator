export class MapProps {
    constructor(map) {
      this.name = map.name;
      this.type = 'MAP_TYPE_GEO';
      this.position = {
        x: map.position.x,
        y: map.position.y
      };
      this.zoom = map.zoom;
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
  constructor(map, markers) {
    this.id = map.id;
    this.map = new MapProps(map);
    this.markers = new Array (markers);
    }
  }
export class ToCreateGeoMap {
  constructor(map, markers) {
    this.created = new GeoMap(map, markers);
    }
  }

export class ChangedMap {
    constructor(map, markers) {
      this.etag = map.etag;
      this.map_id = map.id;
      this.map = new MapProps(map);
      }
    }

export class ToChangeGeoMap {
    constructor(map, markers) {
      this.updated = new ChangedMap(map);
      }
    }


    export class ToChangedMarkers {
      constructor(map, markers) {
        this.changed = new UpdateMarkers(map, markers);
      }
    }

    export class UpdateMarkers {
      constructor(map, markers) {
        this.map_id = map.id;
        this.updated = markers;
      }
    }