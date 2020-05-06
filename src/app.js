import React, {Component} from 'react';
import Step from './Step.js'

class App extends Component {
  state = {
    steps: [
      {id:'createMap', buttonID: 'createMapButton', value: 'To create Map'},
      {id:'geolocation', buttonID: 'getGeolocation', value: 'Get Geolocation'},
      {id:'addingMarkers', buttonID: 'addingMarkersButton', value: 'Map List'},
      {id:'removeMaps', buttonID: 'removeMapsButton', value: 'Remove Maps'},
      {id:'resultDiv', buttonID: 'barrelButton', value: 'do a barrel roll'}
    ]
  }

  render() {
    const steps = this.state.steps

    return (
      <div>
        <Step id={steps[0].id} buttonID={steps[0].buttonID} value={steps[0].value} />
        <Step id={steps[1].id} buttonID={steps[1].buttonID} value={steps[1].value} />
        <Step id={steps[2].id} buttonID={steps[2].buttonID} value={steps[2].value} />
        <Step id={steps[3].id} buttonID={steps[3].buttonID} value={steps[3].value} />
        <Step id={steps[4].id} buttonID={steps[4].buttonID} value={steps[4].value} />
        </div>
      );
  }
}

export default App;

