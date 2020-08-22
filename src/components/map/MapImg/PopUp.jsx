/*import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature, Marker , Popup} from 'react-mapbox-gl';

class PopUp extends Component {
    constructor(props) {
    super(props);
    }

    render() {
      console.log('props Map: ' , this.props)
      if (!this.props.activeMap.id) {
        return <div></div>
      } else {
        let mapProps = this.props.activeMap;   
        console.log('mapProps', mapProps);

        return (
                <Popup
                  coordinates={[37.615560, 55.752220]}
                  offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}>
                  <h1>Popup</h1>
                </Popup>
              )
             }

      }
       
    } 

export default PopUp;


крч! свой маркер появляется если в слое не задана иконка, не все иконки слоя отображаются.
автор ..... надеюсь ты не спишь ночами..... потому что сначала идет широта, а потом долгота! больной ты ублюдок

..... a нет, это в геокартах  мудаки

*/