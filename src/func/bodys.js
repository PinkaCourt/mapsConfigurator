export class MapStr {
    constructor() {
      this.name = 'NBL_Postman_Map99';
      this.type = 'MAP_TYPE_GEO';
      this.position = {
        x: localStorage.getItem('longitude'),
        y: localStorage.getItem('latitude')
      };
      this.zoom = 17;
      this.provider_id = providerID
    }
  }




  export class MapObj {
    constructor() {
      this.id = getUuid();
      this.sharing = {
        kind: 'SHARING_KIND_NOT_SHARED',
        shared_roles: []
      };
      this.map = new MapStr;
    }
  }


  
export class ToCreate {
    constructor() {
      this.created = new MapObj;
    }
  }


 export  class ToDelete {
    constructor() {
      this.removed = [toDeleteMaps];
    }
  }
  