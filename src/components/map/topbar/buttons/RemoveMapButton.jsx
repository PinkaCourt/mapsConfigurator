import React, {Component} from 'react';

export class RemoveMapButton extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <button
        onClick={() => this.props.deleteMapClick()}
          > {'Remove Map'} 
            </button>)
  }
}

export default RemoveMapButton
