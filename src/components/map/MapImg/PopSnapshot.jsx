import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature, Marker , Popup} from 'react-mapbox-gl';

class PopSnapshot extends Component {
  /*
                    offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}
  */
    constructor(props) {
    super(props);
    }

    render() {
      console.log('props PopSnapshot' , this.props)
      console.log('this.props.selectMarker.position.x' , this.props.selectMarker.position.x)
        return (
                <Popup
                  className=".gl-popup"
                  coordinates={[this.props.selectMarker.position.x , this.props.selectMarker. position.y]}
                  anchor="top"
                  closeOnClick={true}

                  >
                  <img width={200} src={this.props.selectMarker.snapshot} />
                  <h3> {this.props.selectMarker.cameraName}</h3>
                </Popup>
              )
             }
} 

export default PopSnapshot;

/*
крч! свой маркер появляется если в слое не задана иконка, не все иконки слоя отображаются.
автор ..... надеюсь ты не спишь ночами..... потому что сначала идет широта, а потом долгота! больной ты ублюдок

..... a нет, это в геокартах  мудаки

*/