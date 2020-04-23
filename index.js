const IP =  document.getElementById('IP').value
const PORT = document.getElementById('PORT').value
const USER = document.getElementById('USER').value
const PASS = document.getElementById('PASS').value
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const URL = 'http://' + IP + ':' + PORT
const URLhosts = URL + '/hosts'
const URLIndexByRole = URL + '/v1/security/config/user'
const URLcreateMap =   URL + '/v1/maps:change'
const URLmaplist =   URL + '/v1/maps?view=VIEW_MODE_ONLY_META'

let AUTH = 'Basic ' + btoa(USER + ':' + PASS);
//const getAuthorizationHeaderValue = () => `Basic ${btoa(`${username}:${password}`)}`;

const getHostButton = document.getElementById('getHost')

const options = {
  method: 'GET',
  credentials: 'include',
  headers: {
    Authorization: 'Basic ' + btoa(USER + ':' + PASS),
  }
}

/*
window.onload = initializeMediaSource;

async function initializeMediaSource() {
  done = await fetch(URL, options)
    .then(res =>
      console.log('ок'))
}

*/

/*
async function initializeMediaSource() {
  done = await fetch(URL, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: new Headers({
      'Authorization': AUTH,
      'Content-Type': 'application/json',
      'Origin': 'http://127.0.0.1:8001'
      })
    })
    .then(res =>
      console.log('ок'))
}
*/

getHostButton.addEventListener("click", async function() {

  host = await fetch(URLhosts, options)
    .then(res =>
      //console.warn ('123');
      console.log (res)
      //res.json()
      )
    .then(data => {
      //makeElement('resultDiv', data[0])
      //host = data[0];
    });
    /*
    indexByRole = await fetch(URLIndexByRole, options)
      .then(res => res.json())
      .then(data => {
        owner = data.current_roles[0].index;
        makeElement('resultDiv', data.current_roles[0].index)
      });
*/
});

function  makeElement(parentId, value) {
  let parent = document.getElementById(parentId)
  let child = document.createElement('span')
  child.textContent = value;
  parent.appendChild(child);
}

// get http://{{address}}/v1/security/config/user

let bodyMap = {
  "created": {
    "id": "dfbad6e0-59a9-4ae3-bc67-f94142a1f2b0",
    "sharing": {
        "owner": "9745b902-2a36-4035-bdd6-012e0dae66c0",
        "kind": "SHARING_KIND_NOT_SHARED",
        "shared_roles": []
    },
    "map": {
        "name": "NBL_Postman_Map",
        "type": "MAP_TYPE_GEO",
        "position": {
            "x": 55.4507,
            "y": 37.3656
        },
        "zoom": 1,
        "provider_id": "9cb89d76-67e9-47cf-8137-b9ee9fc46388",
        "image_meta": {}
    },
    "image_data": "",
    "markers": []
    }
}

createMapButton.addEventListener("click", async function() {
  map = await fetch(URLcreateMap, {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'include',
    headers: new Headers({
      'Authorization': AUTH,
      'Content-Type': 'application/json',
      'Origin': 'http://127.0.0.1:5500'
      }),
    body: JSON.stringify(bodyMap)
    })
    .then(res =>
      console.log(res))
});
let addingMarkersButton = document.getElementById('addingMarkersButton')

addingMarkersButton.addEventListener("click", async function() {
  mapList = await fetch(URLmaplist, {
    method: 'GET',
    headers: new Headers({
      'Authorization': AUTH,
      'Content-Type': 'application/json',
      'Origin': 'http://127.0.0.1:8001'
      })
    })
    .then(res =>
      console.log(res))
  makeElement('resultDiv', mapList)
});








/*
function makeRequest(url: URL): Promise<string> {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url.href, true);
		xhr.onload = () => {
			if (xhr.status !== 200) {
				reject(new Error(xhr.statusText));
			} else {
				resolve(xhr.responseText);
			}
		};
		xhr.onerror = () => {
			reject(new Error(xhr.statusText));
		};
		xhr.send();
	});
}
*/
