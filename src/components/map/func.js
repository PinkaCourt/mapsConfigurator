import {URLmaplist} from '../../constants/url.js'
import {GetOptions} from '../../func/httpapi.js'


export async function getMaps(AUTH) {
    let maps;

    await fetch(URLmaplist, new GetOptions(AUTH))
    .then(res => res.json())
    .then(data => {maps = data.items})
    
    return maps;
  }

