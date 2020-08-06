import React, {Component} from 'react';
import {AUTH} from '../../constants/input.js'
import CameraItem from './CameraItem.jsx'
import {GetOptions} from '../../func/httpapi.js'
import {getCameras} from './func.js'
import {URLcameraList} from '../../constants/url.js'

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
	/*this.iframe = React.createRef();*/
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
			const res = await getCameras(AUTH);
			//console.log('res ' + JSON.stringify(res));
			const cameras = res;
			this.setState({cameras});
		}
	}
/* функция под мапу
  	fetchAll = async () => {
		const {camerasMap} = this.state;

		if (!camerasMap.size) {
			const res = await getCameras(AUTH);
			//console.log('res ' + JSON.stringify(res));
			const result = {
				displayId: res.displayId,
				displayName: res.displayName,
			};
			console.log('result ' + JSON.stringify(result));

			const camMap = result;

			const cameras = Array.from(camMap.values());
			this.setState({cameras, camerasMap: camMap, loading: false});
		}
	}
*/





  async handleGetCameras (AUTH) {
    const res  = await fetch(URLcameraList, new GetOptions(AUTH))
    const json = await res.json();
    console.log(json); 
    this.setState({ data: json.cameras });
  }

   //cameraListState

  render() {
    return (
      <ul className="camera_list">

        {this.state.cameras.map((e) => {
          return (
            <CameraItem 
              key = {e.displayId}
              id = {e.displayId}
              name = {e.displayName}  
              />
          )
        })
        }
      </ul>

      );
  }

  /*
   render() {
    return (
      <ul className="camera_list">
        <div className="buttonForCameraList">
        <button onClick={this.handleGetCameras.bind(this, AUTH)} className="button"> GET Camera list </button>

        </div>

        {this.state.data.map((e) => {
          return (
            <CameraItem 
              key = {e.displayId}
              id = {e.displayId}
              name = {e.displayName}  
              />
          )
        })
        }
      </ul>

      );
  } 
  */

}



export default CameraListContainer;
