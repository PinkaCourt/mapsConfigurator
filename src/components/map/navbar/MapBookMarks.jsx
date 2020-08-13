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
//получаем список всех карт
fetchAll = async () => {
  const {maps} = this.state;

  if (!maps.length) {
    const maps = await getMaps(AUTH);
    this.setState({maps});
  }
}
//if (this.state.maps.length)
  render() {
    if (this.state.maps.length) {
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
        )
      };
    return null;
    };

}

export default MapBookMarks;