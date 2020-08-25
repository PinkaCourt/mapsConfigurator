import React, {Component} from 'react';

export class SaveButton extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <button
        onClick={() => this.props.saveChangesClick()}
          > {'Save'} 
            </button>)
  }
}

export default SaveButton


