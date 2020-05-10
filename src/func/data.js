import {updateMarkers} from './methods.js'

export class Data {
    constructor(geoMapID, xCoofr, yCoord, host, cameraID) {
        this.method = updateMarkers;
        this.data = {
            changed : {
              map_id: geoMapID,
              updated: {
              position : {
                x: xCoofr,
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
