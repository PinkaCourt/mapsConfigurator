import {IP} from '../constants/input.js'
import {PORT} from '../constants/input.js'

export const URL = 'http://' + IP + ':' + PORT
export const URLgRPC = URL + '/grpc'
export const URLhosts = URL + '/hosts'
export const URLcameraList = URL + '/camera/list'
export const URLchangeMap = URL + '/v1/maps:change'
export const URLmaplist = URL + '/v1/maps?view=VIEW_MODE_FULL'
export const URLMapMarkers = URL + '/v1/maps/markers'
export const URLMapMarkersUpdate = URL + '/v1/maps/markers:update'

export const URLCameraSnapshot = URL + '/live/media/snapshot/'

export const URLCameraInfo = URL + '/camera/list?filter='