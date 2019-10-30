import React from 'react';
import Header from './components/Header';
import Video from './components/Video';
import VideoInfo from './components/VideoInfo';
import Comments from './components/Comments';
import VideoQueue from './components/VideoQueue';
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

function App() {
  const profPic = picUser;
  const logo = logoBF;

  const commentAry = [
    new commentObj('Theodore Duncan', 'blank.jpg', '11/15/2018', 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!'),
    new commentObj('Gary Wong', 'blank.jpg', '12/12/2018', 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'),
    new commentObj('Michael Lyons', 'blank.jpg', '12/18/2018', 'They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.')
  ];

  const videoList = [
    new sideVideo('0', 'BMX Rampage: 2018 Highlights', 'Red Cow', vidThumb0),
    new sideVideo('1', 'Become A Travel Pro In One Easy Lesson…', 'Scotty Cranmer', vidThumb1),
    new sideVideo('2', 'Les Houches The Hidden Gem Of The…', 'Scotty Cranmer', vidThumb2),
    new sideVideo('3', 'Travel Health Useful Medical Information…', 'Scotty Cranmer', vidThumb3),
    new sideVideo('4', 'Cheap Airline Tickets Great Ways To Save', 'Emily Harper', vidThumb4),
    new sideVideo('5', 'Take A Romantic Break In A Boutique Hotel', 'Ethan Owen', vidThumb5),
    new sideVideo('6', 'Choose The Perfect Accommodations', 'Lydia Perez', vidThumb6),
    new sideVideo('7', 'Cruising Destination Ideas', 'Timothy Austin', vidThumb7),
    new sideVideo('8', 'Train Travel On Track For Safety', 'Scotty Cranmer', vidThumb8)
  ];

  var currentId = '0';
  // var currentVideo = 
  // var mainVideo = new mainVideo(
  //   videoList.filter(video => {
  //     video.id === currentId
  //   }).id ,

  // )

  var mainVideo = {};

  videoList.filter(video => video.id === currentId).forEach(element => {
    mainVideo = element;
  });

  mainVideo.description = "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title";
  mainVideo.views = "1,001,023"
  mainVideo.likes = "110,985"
  mainVideo.duration = "100"
  mainVideo.video = vidFile;
  mainVideo.timestamp = new Date("12/18/2018").getTime();
  mainVideo.comments = commentAry;


  const icons = {
    play: playIcon,
    fullscreen: fullscreenIcon,
    volume: volumeIcon,
    upload: uploadIcon,
    search: searchIcon
  };



  return (
    <div>
      <Header profPic={profPic} logo={logo} search={icons.search} upload={icons.upload} />
      <Video image={mainVideo.image} video={mainVideo.video} icons={icons} />
      <VideoInfo mainVideo={mainVideo} viewsIcon={viewsIcon} likesIcon={likesIcon} />
      <Comments comments={mainVideo.comments} profPic={profPic} picBlank={picBlank} />
      <VideoQueue videoList={videoList} />
    </div>
  );
}

export default App;
