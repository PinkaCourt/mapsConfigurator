import React, {Component} from 'react';

export class CreateNewMapButton extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <button
        onClick={() => this.props.onCreateNewMapClick()}
          > {'To create Map'} 
            </button>)
  }
}

export default CreateNewMapButton


