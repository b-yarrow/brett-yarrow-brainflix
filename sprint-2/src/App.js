import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Route, Switch } from 'react-router-dom';

import Video from './components/Video';
import VideoInfo from './components/VideoInfo';
import Comments from './components/Comments';
import VideoQueue from './components/VideoQueue';
// import VideoQueueLoad from './components/VideoQueueLoad';

import Upload from './components/Upload';
import Header from './components/Header';


import vidThumb0 from './assets/images/video-list-0.jpg';
import vidThumb1 from './assets/images/video-list-1.jpg';
import vidThumb2 from './assets/images/video-list-2.jpg';
import vidThumb3 from './assets/images/video-list-3.jpg';
import vidThumb4 from './assets/images/video-list-4.jpg';
import vidThumb5 from './assets/images/video-list-5.jpg';
import vidThumb6 from './assets/images/video-list-6.jpg';
import vidThumb7 from './assets/images/video-list-7.jpg';
import vidThumb8 from './assets/images/video-list-8.jpg';
import picUser from './assets/images/Mohan-muruge.jpg'
import logoBF from './assets/images/logos/Logo-brainflix.svg';
import picBlank from './assets/images/blank.jpg'
import viewsIcon from './assets/images/icons/SVG/Icon-views.svg'
import likesIcon from './assets/images/icons/SVG/Icon-likes.svg'
import vidFile from './assets/video/brainStationSampleVideo.mp4';
import playIcon from './assets/images/icons/SVG/icon-play.svg'
import pauseIcon from './assets/images/icons/SVG/Icon-pause.svg'
import fullscreenIcon from './assets/images/icons/SVG/Icon-fullscreen.svg'
import volumeIcon from './assets/images/icons/SVG/Icon-volume.svg'
import uploadIcon from './assets/images/icons/SVG/Icon-upload.svg'
import searchIcon from './assets/images/icons/SVG/Icon-search.svg'


const apiString = '?api_key=0b33844c-e41d-4ee8-a9cc-e0dde9c37a54';

function commentObj(name, avatar, date, comment) {
  this.name = name;
  this.avatar = avatar;
  this.date = date;
  this.comment = comment;
}

function sideVideo(id, title, channel, image) {
  this.id = id;
  this.title = title;
  this.channel = channel;
  this.image = image;
}

class App extends Component {
  state = {
    profPic: picUser,
    logo: logoBF,
    picBlank: picBlank,

    videoList: [],

    currentId: '0',

    mainVideo: {
      // id: '0',
      // title: 'BMX Rampage: 2018 Highlights',
      // channel: 'Red Cow',
      // image: vidThumb0,
      // description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title",
      // views: "1,001,023",
      // likes: "110,985",
      // duration: "100",
      // video: vidFile,
      // timestamp: new Date("12/18/2018").getTime(),
      // comments: [
      //   new commentObj('Theodore Duncan', 'blank.jpg', '11/15/2018', 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!'),
      //   new commentObj('Gary Wong', 'blank.jpg', '12/12/2018', 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'),
      //   new commentObj('Michael Lyons', 'blank.jpg', '12/18/2018', 'They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.')
      // ],
    },

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
    axios.get('https://project-2-api.herokuapp.com/videos' + apiString).then(response => {
      this.setState({
        videoList: response.data
      });
      // console.log('Got Video List')
      axios.get('https://project-2-api.herokuapp.com/videos/' + this.state.videoList[0].id + apiString).then(response => {
        this.setState({
          mainVideo: response.data
        });
        console.log(this.state.mainVideo);
        // console.log('made it here?');
      }).catch((error) => {
        // handle error
        // console.log(error);
      })
      // console.log(this.state.mainVideo)
    });
  }

  updateMainVid = (match) => {
    axios.get('https://project-2-api.herokuapp.com/videos/' +
      match + apiString)
      .then(response => {
        this.setState({
          mainVideo: response.data
        });
      }).catch(error => {
        console.log(error);
      })
  }

  // componentDidUpdate() {
  //   axios.get('https://project-2-api.herokuapp.com/videos/' +
  //     this.state.videoList.find(video => video.id === App.match.params.videoId) + apiString)
  //     .then(response => {
  //       this.setState({
  //         mainVideo: response.data
  //       });
  //     });
  // }

  // componentDidUpdate() {
  //   axios.get('https://project-2-api.herokuapp.com/videos' + apiString).then(response => {
  //     this.setState({
  //       videoList: response.data
  //     });

  //   });
  // }

  render() {

    return (
      <div>
        <Header profPic={this.state.profPic} logo={this.state.logo} search={this.state.icons.search} upload={this.state.icons.upload} />
        <Switch>
          <div>
            <Switch>
              <Route
                path="/" exact
                render={props => {
                  return (
                    <Video image={this.state.mainVideo.image} video={this.state.mainVideo.video} icons={this.state.icons} />
                  );
                }}
              />
              <Route
                path="/video/:videoId"
                render={props => {
                  const currentVideo = this.state.videoList.find(
                    video => video.id === props.match.params.videoId
                  );
                  console.log('hi im here in theis route')
                  if ((currentVideo !== undefined) && (this.state.mainVideo.id !== currentVideo.id)) {
                    this.updateMainVid(currentVideo.id);
                  }
                  return (
                    <Video image={this.state.mainVideo.image} video={this.state.mainVideo.video} icons={this.state.icons} />
                  );
                }}
              />
            </Switch>
            <div className='bottom__container'>
              <div className='bottom__info-comments'>
                <VideoInfo video={this.state.mainVideo} icons={this.state.icons} />
                <Comments comments={this.state.mainVideo.comments} profPic={this.state.profPic} picBlank={this.state.picBlank} />
              </div>
              <VideoQueue videoList={this.state.videoList} current={this.state.mainVideo.id} />

            </div>
          </div>

          <Route path="/upload" component={Upload} />
        </Switch>
      </div>
    );
  }
}

export default App;
