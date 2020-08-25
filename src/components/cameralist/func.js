import {GetOptions} from '../../func/httpapi.js'
import {URLcameraList} from '../../constants/url.js'

export async function getCameras (AUTH) {
	let cameras;
	
	await fetch(URLcameraList, new GetOptions(AUTH))
		.then(result => result.json())
		.then(data => cameras = data.cameras)

	return cameras;
}
