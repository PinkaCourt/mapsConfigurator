// функции вызова списка камер
import {GetOptions} from '../../func/httpapi.js'
import {URLcameraList} from '../../constants/url.js'
import {selectCameraID} from '../../func/select.js'

// запрос списка камер
// function return array id + cameraName
export async function getCameras (AUTH) {
	let cameras = await fetch(URLcameraList, new GetOptions(AUTH))
		.then(res => res.json())
		.then(data => {
			let res = data.cameras.map(selectCameraID);
			return res;
		})
	//makeElement('resultDiv', camerasID);
	//console.log(cameras)
	return cameras;
}