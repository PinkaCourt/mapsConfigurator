import React, {Component} from 'react';
import {} from '../../constants/input.js'
import CameraItem from './CameraItem.jsx'
import {GetOptions} from '../../func/httpapi.js'
import {getCameras} from './func.js'
import {URLcameraList} from '../../constants/url.js'

//import type {Camera} from 'types/camera';

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

//описание стилей
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

//в рендере
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
  constructor(props) {
	super(props);
  }
  state = {
	cameras: [],
	};

  componentDidMount() {
	this.fetchAll();
	}

  fetchAll = async () => {
	const {cameras} = this.state;

	if (!cameras.length) {
		const res = await getCameras();
		const cameras = res;
		this.setState({cameras});
		}
	}

  async handleGetCameras () {
    const res  = await fetch(URLcameraList, new GetOptions())
    const json = await res.json();
    console.log(json); 
    this.setState({ data: json.cameras });
  }

  render() {
    return (
      <ul className="camera_list">
        {this.state.cameras.map((e) => {
          return (
            <CameraItem 
              key = {e.displayId}
              id = {e.displayId}
              name = {e.displayName}  
              /> )
        }) }
      </ul>
      );
  }
}

export default CameraListContainer;
