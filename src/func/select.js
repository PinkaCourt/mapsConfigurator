export function selectID(e) {
    let value = e.meta.id;
    return value;
  }

export function selectCameraID(e) {
  let camera = {
    id:'',
    name:''
  };
  let displayId = e.displayId;
  let displayName = e.displayName;
  camera.id = displayId;
  camera.name = displayName;
  //console.log(camera);
  return camera;
  }