import {getUuid} from './getUuid.js'

export class MapProps {
    constructor() {
      this.name = new Date;
      this.type = 'MAP_TYPE_GEO';
      this.position = {
        x: localStorage.getItem('longitude'),
        y: localStorage.getItem('latitude')
      };
      this.zoom = 17;
      this.provider_id = '9cb89d76-67e9-47cf-8137-b9ee9fc46388'
    }
  }

  export class Map {
    constructor() {
      this.id = getUuid();
      this.sharing = {
        kind: 'SHARING_KIND_NOT_SHARED',
        shared_roles: []
      };
      this.map = new MapProps;
    }
  }
  
export class ToCreate {
    constructor() {
      this.created = new Map;
    }
  }

 export class ToDelete {
    constructor(array) {
      this.removed = new Set(array);
    }
  }
  

  