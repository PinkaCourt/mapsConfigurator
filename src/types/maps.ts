export type Point = {
    x: number, 
    y: number
}

export type ImageMeta = {
    fileName: string, 
    mimeType: string, 
    name: string, 
    sizeBytes: number,
}

export type Sharing = {
    owner: string, 
    kind: 'SHARING_KIND_ANY' | 'SHARING_KIND_SPECIFIC_ROLES' |'SHARING_KIND_NOT_SHARED', 
    sharedRoles: Array<string>, 
}

export type CameraMarkers = {
    accessPoint: string, 
    displayId: string, 
    displayName: string,
    position: Point, 
}

export type Map = {
    id: string,
    access: 'MAP_ACCESS_FULL',
    name: string,
    type: 'MAP_TYPE_RASTER' | 'MAP_TYPE_GEO',
    position: Point, 
    zoom: number,
    markers: Array<CameraMarkers>,
}