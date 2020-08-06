// функции вызова списка камер
import {GetOptions} from '../../func/httpapi.js'
import {URLcameraList} from '../../constants/url.js'
import {selectCameraID} from '../../func/select.js'

// запрос списка камер
// function return array id + cameraName

export async function getCameras (AUTH) {
	let cameras;
	
	await fetch(URLcameraList, new GetOptions(AUTH))
		.then(result => result.json())
		.then(data => cameras = data.cameras)

	return cameras;
}



//функция под мапу

/*
export async function getCameras (AUTH) {
	let res = {
		displayId: [],
		displayName: [],
	}

	let cameras;
	
	await fetch(URLcameraList, new GetOptions(AUTH))
		.then(result => result.json())
		.then(data => cameras = data.cameras)

	//console.log( 'cameras: ' + JSON.stringify(cameras));
	while (cameras.length) {
		const camera = cameras.shift();
		res = {
			displayId: res.displayId.concat(camera.displayId),
			displayName: res.displayName.concat(camera.displayName),
			};
	}
	//console.log( 'res: ' + JSON.stringify(res));
	return res;
}
*/