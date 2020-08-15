import React, {Component} from 'react';
import MapItem from './MapItem.jsx'

class MapNavBar extends Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
    };

  //динамические списки???
  /*
  handleClick() {
    console.log('значение this:', this);
  }

componentDidMount() {
  this.fetchAll();
  }
//получаем список всех карт

/*
selectElem(index) {
  console.log(index + this)
  let mapas = this.state.maps.concat()
}
*/
//onSelect={this.selectElem.bind(this, map.meta.id)}

  render() {
      return (
        <div className="map_toolbar">
          {this.props.maps.map((e, index) => {
            return (
              <MapItem
                  key = {index}
                  name = {e.name}
                  position = {e.position}
                  zoom = {e.zoom}
                  id = {e.id}
                  onMapClick={this.props.onMapClick}
                  //onSelect={this.selectElem.bind(this, index)}
                  />
              )
            })
          }
          </div>
      )
  };
}

export default MapNavBar;


/*

  render() {
      return (
        <div className="map_toolbar">
          {this.props.maps.map((e, index) => {
            return (
              <MapItem
                  key = {index}
                  name = {e.data.name}
                  position = {e.data.position}
                  zoom = {e.data.zoom}
                  id = {e.meta.id}
                  onMapClick={this.props.onMapClick}
                  //onSelect={this.selectElem.bind(this, index)}
                  />
              )
            })
          }
          </div>
      )
  };

*/