export type Archive = {
    accessPoint: string, 
    default: boolean, 
    isEmbedded: boolean, 
    storage: string,
    storageDisplayName: string,
}

export type AudioStream = {
    accessPoint: string, 
    isActivated: boolean, 
}

export type Detector = {
    accessPoint: string, 
    displayName: string,
    parentDetector: string,
    type: string, 
}

export type PtzProps = {
    isAbsolute: boolean, 
    isAuto: boolean, 
    isContinous: boolean, 
    isRelative: boolean,
}

export type Ptz = {
    accessPoint: string, 
    areaZoom: boolean, 
    is_active: boolean,
    pointMove: boolean, 
    focus: PtzProps, 
    iris: PtzProps,
    move: PtzProps, 
    zoom: PtzProps,
}

//export type TextSource = {}

export type VideoStream = {
    accessPoint: string, 
}

export type Camera = {
    archives: Array<Archive>,
    audioStreams: Array<AudioStream>,
    comment: string,
    detectors: Array<Detector>,
    displayId: string, 
    displayName: string,
    groups: Array<string>,
    ipAddress: string,
    isActivated: boolean,
    latitude: string,
    longitude: string,
    model: string, 
    offlineDetectors: Array<Detector>,
    ptzs: Array<Ptz>,
   // textSources: Array<TextSource>,
    vendor: string,
    videoStreams: Array<VideoStream>,
}