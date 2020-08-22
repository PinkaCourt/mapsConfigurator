export type Point = {
  x: number, //longitude
  y: number //latitude
}

export type CameraMarkers = {
  accessPoint: string, 
  displayId: string, 
  displayName: string,
  position: Point, 
}

export type Map = {
  id: string,
  name: string,
  position: Point, 
  zoom: Array<number>,
  markers: Array<CameraMarkers>,
}
