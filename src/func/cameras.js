import {URL} from '../constants/url.js'
import {URLcameraList} from '../constants/url.js'
import {URLmaplist} from '../constants/url.js'
import {URLchangeMap} from '../constants/url.js'
import {URLhosts} from '../constants/url.js'


import {GetOptions} from './httpapi.js'
import {PostOptions} from './httpapi.js'
//import AUTH from "../index.js"
//import {makeElement} from './makeElement.js'
let camerasID = [];
let toDeleteMaps = [];

import {selectCameraID} from './select.js'
import {selectID} from './select.js'

import {ToDelete} from "./bodys.js"
import {ToCreate} from "./bodys.js"

//let camerasID = [];
//let toDeleteMaps = [];

export async function getCameras (auth) {
	let camerasID = [];
	await fetch(URLcameraList, new GetOptions(auth))
	.then(res => res.json())
	.then(data => {
		data.cameras.map(selectCameraID)
	})
	//makeElement('resultDiv', camerasID);
	//console.log('camerasID' + camerasID)
}

export async function getMaps (auth) {
	let mapList = await fetch(URLmaplist, new GetOptions(auth))
		.then(res => res.json())
    	.then(data => {
			data.items.map(selectID)})
}

export async function deleteMaps (auth, mapsArray) {
	await fetch(URLchangeMap, new PostOptions(auth, new ToDelete(mapsArray)))
	.then(res => res.json())
}

export async function getHost (auth) {
	let host = await fetch(URLhosts, new GetOptions(auth))
    .then(res => res.json())
    .then(data => {data[0]})
}

export async function createMap (auth) {
  let mapID = await fetch(URLchangeMap, new PostOptions(auth, new ToCreate))
    .then(res =>
      fetch(URLmaplist, new GetOptions(auth))
      .then(res => res.json())
      .then(data => data.items[0].meta.id)
      )
}