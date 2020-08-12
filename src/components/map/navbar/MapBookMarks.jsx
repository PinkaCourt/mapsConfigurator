import React, {Component} from 'react';
import {getMaps} from '../func.js'
import {AUTH} from '../../../constants/input.js'
/*
const MapBookMarks = (props) =>
  <li className="map_bm">{props.name}
    </li>

export default MapBookMarks
*/
const styles = {
	map_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
	map_container: {
    backgroundColor: '#337361',
    height: '100%',
  },
	map_toolbar: {
		display: 'flex',
    backgroundColor: '#334361',
    height: '30px',
	},
};


class MapBookMarks extends Component {
  constructor(props) {
    super(props);
    }

  state = {
    maps: [],
  };

componentDidMount() {
  this.fetchAll();
  }

fetchAll = async () => {
  const {maps} = this.state;

  if (!maps.length) {
    const res = await getMaps(AUTH);
    const maps = res;
    this.setState({maps});
  }
}

  render() {
    return (
       <div style={styles.map_toolbar} 
         className="map_toolbar">
         {this.state.maps.map((e) => {
           return (
            <li className="map_bm"
                key = {e.meta.id}
                name = {e.meta.name}
                position = {e.data.position}
                zoom = {e.data.zoom}>
                  {e.meta.name}
            </li>)
         })}
         </div>
     );
 }
}

export default MapBookMarks;