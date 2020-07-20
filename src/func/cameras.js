import {URL} from '../constants/url.js'
import {URLcameraList} from '../constants/url.js'
import {URLmaplist} from '../constants/url.js'
import {URLchangeMap} from '../constants/url.js'
import {URLhosts} from '../constants/url.js'


import {GetOptions} from './httpapi.js'
import {PostOptions} from './httpapi.js'
import AUTH from '../constants/input.js'
//import {makeElement} from './makeElement.js'
let camerasID = [];
let toDeleteMaps = [];

import {selectCameraID} from './select.js'
import {selectID} from './select.js'

import {ToDelete} from "./bodys.js"
import {ToCreate} from "./bodys.js"

//let camerasID = [];
//let toDeleteMaps = [];

export async function getCameras (AUTH) {
	let camerasID = [];
	await fetch(URLcameraList, new GetOptions(AUTH))
	.then(res => res.json())
	.then(data => {
		data.cameras.map(selectCameraID)
	})
	//makeElement('resultDiv', camerasID);
	//console.log('camerasID' + camerasID)
}

export async function getMaps (AUTH) {
	let mapList = await fetch(URLmaplist, new GetOptions(AUTH))
		.then(res => res.json())
    	.then(data => {
			data.items.map(selectID)})
}

export async function deleteMaps (AUTH, mapsArray) {
	await fetch(URLchangeMap, new PostOptions(AUTH, new ToDelete(mapsArray)))
	.then(res => res.json())
}
// это работает! не трогай
export async function getHost (AUTH) {
	let host = await fetch(URLhosts, new GetOptions(AUTH))
    .then(res => res.json())
    .then(data => {data[0]})
}

export function log(a) {
	console.log('log' + a)
  }

export async function createMap (AUTH) {
  let mapID = await fetch(URLchangeMap, new PostOptions(AUTH, new ToCreate))
    .then(res =>
      fetch(URLmaplist, new GetOptions(AUTH))
      .then(res => res.json())
      .then(data => data.items[0].meta.id)
      )
}