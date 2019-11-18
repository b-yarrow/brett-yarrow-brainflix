import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Video from './components/Video';
import VideoInfo from './components/VideoInfo';
import Comments from './components/Comments';
import VideoQueue from './components/VideoQueue';

import Upload from './components/Upload';
import Header from './components/Header';


// import vidThumb0 from './assets/images/video-list-0.jpg';
// import vidThumb1 from './assets/images/video-list-1.jpg';
// import vidThumb2 from './assets/images/video-list-2.jpg';
// import vidThumb3 from './assets/images/video-list-3.jpg';
// import vidThumb4 from './assets/images/video-list-4.jpg';
// import vidThumb5 from './assets/images/video-list-5.jpg';
// import vidThumb6 from './assets/images/video-list-6.jpg';
// import vidThumb7 from './assets/images/video-list-7.jpg';
// import vidThumb8 from './assets/images/video-list-8.jpg';
import picUser from './assets/images/Mohan-muruge.jpg'
import logoBF from './assets/images/logos/Logo-brainflix.svg';
import picBlank from './assets/images/blank.jpg'
import viewsIcon from './assets/images/icons/SVG/Icon-views.svg'
import likesIcon from './assets/images/icons/SVG/Icon-likes.svg'
// import vidFile from './assets/video/brainStationSampleVideo.mp4';
import playIcon from './assets/images/icons/SVG/icon-play.svg'
// import pauseIcon from './assets/images/icons/SVG/Icon-pause.svg'
import fullscreenIcon from './assets/images/icons/SVG/Icon-fullscreen.svg'
import volumeIcon from './assets/images/icons/SVG/Icon-volume.svg'
import uploadIcon from './assets/images/icons/SVG/Icon-upload.svg'
import searchIcon from './assets/images/icons/SVG/Icon-search.svg'

// const apiString = '?api_key=0b33844c-e41d-4ee8-a9cc-e0dde9c37a54';

// const oldUrl = `https://project-2-api.herokuapp.com/videos${apiString}`;

const newUrl = 'http://localhost:5000/videos/'

class App extends Component {
  state = {
    profPic: picUser,
    logo: logoBF,
    picBlank: picBlank,

    videoList: [],

    currentId: '0',

    mainVideo: {},

    changeVideo: false,

    icons: {
      play: playIcon,
      fullscreen: fullscreenIcon,
      volume: volumeIcon,
      upload: uploadIcon,
      search: searchIcon,
      likes: likesIcon,
      views: viewsIcon
    }
  }

  componentDidMount() {
    axios.get(`${newUrl}`).then(response => {
      this.setState({
        videoList: response.data
      }, () => {
        this.updateMainVid(this.state.videoList[0].id)
      }
      );
    });
  }

  updateMainVid = (match) => {
    axios.get(newUrl + match)
      .then(response => {
        this.setState({
          mainVideo: response.data
        });
      });
  }

  uploadVid = (event) => {
    event.preventDefault();
    const newVid = {
      title: event.target.uploadTitle.value,
      channel: "Brett Yarrow",
      image: event.target.uploadImage.src,
      description: event.target.uploadDescription.value
    }
    axios.post(newUrl, newVid).then(response => {
      console.log('Video Upload Successful!')
      console.log(response.data)
      this.setState({
        videoList: [...this.state.videoList, response.data]
      })
    }).catch(error => {
      alert(error.response.data.errorMessage)
      console.log('failed to upload')
    })
    event.target.reset();
  }

  render() {

    return (
      <div>
        <Header profPic={this.state.profPic} logo={this.state.logo} search={this.state.icons.search} upload={this.state.icons.upload} />
        <Switch>
          <Route
            path="/" exact
            render={props => {
              return (
                <>
                  <Video updateMainVid={this.updateMainVid} {...props} image={this.state.mainVideo.image} video={this.state.mainVideo.video} icons={this.state.icons} />
                  <div className='bottom__container'>
                    <div className='bottom__info-comments'>
                      <VideoInfo video={this.state.mainVideo} icons={this.state.icons} />
                      <Comments comments={this.state.mainVideo.comments} profPic={this.state.profPic} picBlank={this.state.picBlank} />
                    </div>
                    <VideoQueue videoList={this.state.videoList} current={this.state.mainVideo.id} />

                  </div>
                </>
              );
            }}
          />
          <Route
            path="/video/:videoId"
            render={props =>
              <>
                <Video updateMainVid={this.updateMainVid} {...props} image={this.state.mainVideo.image} video={this.state.mainVideo.video} icons={this.state.icons} />
                <div className='bottom__container'>
                  <div className='bottom__info-comments'>
                    <VideoInfo video={this.state.mainVideo} icons={this.state.icons} />
                    <Comments comments={this.state.mainVideo.comments} profPic={this.state.profPic} picBlank={this.state.picBlank} />
                  </div>
                  <VideoQueue videoList={this.state.videoList} current={this.state.mainVideo.id} />
                </div>
              </>
            }
          />
          <Route
            path="/upload"
            render={props =>
              <>
                <Upload uploadVid={this.uploadVid} />
              </>
            }
          />
        </Switch>

      </div>
    );
  }
}

export default App;
