import React, {Component} from 'react';

export class CancelButton extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <button
        onClick={() => this.props.cancelChangesClick()}
          > {'Cancel'} 
            </button>)
  }
}

export default CancelButton


