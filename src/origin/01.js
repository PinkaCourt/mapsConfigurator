import React, {Component} from 'react';
import Step from './Step.js.js'
class App extends Component {

/*
state = {
    cars: [
      {vendor:'Ford', model: 'Focus', year: 2001},
      {vendor:'Mazda', model: '3', year:2009},
    ],
    pageTitle: 'TestCase',
    showCars:false
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  inputHandler = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

*/
  render() {
    //const cars = this.state.cars
    return (
      <div>
        <h1> {this.state.pageTitle}</h1>
        <input type="text" onChange={this.inputHandler} />

        <button onClick={this.changeTitleHandler.bind(this, 'header')}
        > Change title</button>

        <button onClick={this.toggleCarsHandler}
        > Toggle cars</button>

        { this.state.showCars
          ? this.state.cars.map((e, index) => {
            return (
              <Car
                key={index}
                vendor={e.vendor}
                model={e.model}
                year={e.year}
                onChangeTitle={this.changeTitleHandler.bind(this, e.model)}
              />
            )
          })
          :
          null
        }

        </div>

          )
  }
}

export default App;
