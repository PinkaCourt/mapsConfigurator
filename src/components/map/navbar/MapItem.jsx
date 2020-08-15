import React, {Component} from 'react';
import {getMaps} from '../func.js'
import {AUTH} from '../../../constants/input.js'

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
    //console.log(this.props)
    return (
    <li>
      <button 
            className="map_bm"
            //onClick={this.props.onSelect}
            //ref={this.inputRef}
            onClick={() => this.props.onMapClick(this.props.id, this.props.position, this.props.zoom)}
            >
              {this.props.name}
            </button>
      
      </li>
    )
  }
}

export default MapItem

