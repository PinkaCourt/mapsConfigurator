//эта не готова

import React, {Component} from 'react';

//генерит только ul. Без внутренностей
import {AUTH} from '../../constants/input.js'
//import {getCameras} from './func.js'
import Item from './item.js'
//console.log( 'список камер'  + getCameras(AUTH));
//const cameras = getCameras(AUTH);

import {GetOptions} from '../../func/httpapi.js'
import {URLcameraList} from '../../constants/url.js'
//import {selectCameraID} from '../../func/select.js'

/*
Описание типов
type ListProps = {
	classes: Object,
	bookmarks: Object,
	onSelect: Function,
	isSelected: Function,
	handleChecked: Function,
	handleClickVideo: Function,
	isUpdating: boolean,
	shouldDisplay: boolean,
	countSelectedBookmarks: number,
	filter: string,
};

type State = {
	order: string,
	orderBy: string,
	pk: string,
};

*/

/*
описание стилей
const styles = () => ({
	root: {
		marginTop: '5em',
		minWidth: '50%',
		width: '100%',
		maxHeight: '90vh',
		overflowY: 'auto',
		position: 'relative',
	},
	header: {
		position: 'sticky',
		top: 0,
		background: 'rgb(66,66,66)',
		zIndex: 999,
	},
	hidden: {
		display: 'none',
	},
});
*/

/*
в рендере

const {
			bookmarks,
			classes,
			onSelect,
			isSelected,
			handleChecked,
			handleClickVideo,
			isUpdating,
			shouldDisplay,
			countSelectedBookmarks,
			filter,
    } = this.props;
    
*/

class CameraListContainer extends Component {
    state = {
      cameras: [
      {id:'1', name:'camera1'} ,
      {id:'2', name:'camera2'}
      ]}

    /*
    
    state = {
		filter: '',
		bookmarks: [],
		loading: true,
		activeBookmarks: new Map(),
		iframeInitialized: false,
		iframeLoaded: false,
		videoMode: false,
		openModal: false,
		showConfirm: false,
		pendingAction: noop,
		bookmarksMap: new Map(),
	};
    
    */
  render() {
    //const cameras = this.state.cameras;
    return (
      <ul className="camera-list">
        {this.state.cameras.map((e, index) => {
          return (
            <Item 
              key = {index}
              id = {e.displayId}
              name = {e.displayName}  
              />
          )
        })
        }
      </ul>
      );
  }
}
export default CameraListContainer;
