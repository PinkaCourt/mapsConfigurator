import React, {Component} from 'react';
import {AUTH} from '../../constants/input.js'
import CameraItem from './CameraItem.jsx'
import {GetOptions} from '../../func/httpapi.js'
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
	this.state = {data:[]}
	this.iframe = React.createRef();
	
  }

  /*
  	getFirstBookmark() {
		const {activeBookmarks} = this.state;
		const bookmarks = Array.from(activeBookmarks.values());

		return head(bookmarks);
	}*/

/*
    props = {
		"cameras":[],
	}
*/

  /*if (props.cameras.length === 0) {

  }*/

  async handleGetCameras (AUTH) {
    const res  = await fetch(URLcameraList, new GetOptions(AUTH))
    const json = await res.json();
    console.log(json); 
    this.setState({ data: json.cameras });
  }

  /*
    state = {
      cameras: [
        {id:'1', name:'camera1'} ,
        {id:'2', name:'camera3'},
        {id:'23', name:'camera37'}
      ]
    }
*/
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
    return (
      <ul className="camera_list">
        <div className="buttonForCameraList">
        <button onClick={this.handleGetCameras.bind(this, AUTH)} className="button"> GET Camera list </button>

        </div>
        {this.state.data.map((e, index) => {
          return (
            <CameraItem 
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
