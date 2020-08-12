import React, {Component} from 'react';
import {Marker} from 'react-mapbox-gl';

const markerUrl = 'https://image.flaticon.com/icons/svg/2196/2196761.svg';


const CameraMarker = (props) =>
    //console.log(props);
    <Marker
        coordinates={this.props.coordinates}
        anchor="bottom"
        >
        <img src=" https://img.icons8.com/color/48/000000/marker.png" />
        </Marker>

export default CameraMarker;
