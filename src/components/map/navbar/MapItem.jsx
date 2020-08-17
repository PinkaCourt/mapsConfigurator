import React, {Component} from 'react';
//import {getMaps} from '../func.js'
//import {AUTH} from '../../../constants/input.js'

class MapItem extends Component {
  constructor(props) {
    super(props);
    //this.inputRef = React.createRef();
    //this.handleClick = this.handleClick.bind(this);
    }

  /*componentDidMount() {
     this.inputRef.current.focus();
      }*/
  render() {
    return (
      <li 
        className={(this.props.id === this.props.activeMap.id) ? "map_bm--active" : "map_bm"}
        //onClick={this.props.onSelect}
        //ref={this.inputRef}
        onClick={() => this.props.onMapClick(
          this.props.id, 
          this.props.position, 
          this.props.zoom,
          this.props.name
          )}
          >
        {this.props.name}       
        </li>
    )
  }
}

export default MapItem

