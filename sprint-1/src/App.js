import React from 'react';
import Header from './components/Header';
import Video from './components/Video';
import VideoInfo from './components/VideoInfo';
import Comments from './components/Comments';

function commentObj(name, avatar, date, comment) {
  this.name = name;
  this.avatar = avatar;
  this.date = date;
  this.comment = comment;
}

function videoObj(title, creator, date, preview) {
  this.title = title;
  this.creator = creator;
  this.date = date;
  this.preview = preview;
}



function App() {
  const commentAry = [
    new commentObj('Theodore Duncan', 'blank.jpg', '11/15/2018', 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!'),
    new commentObj('Gary Wong', 'blank.jpg', '12/12/2018', 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'),
    new commentObj('Michael Lyons', 'blank.jpg', '12/18/2018', 'They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.')
  ];

  const videoList = [
    new videoObj('BMX Rampage: 2018 Highlights', 'Red Cow', '12/18/2018', 'video-list-0.jpg'),
    new videoObj('Become A Travel Pro In One Easy Lesson…', 'Scotty Cranmer', '12/18/2018', 'video-list-1.jpg'),
    new videoObj('Les Houches The Hidden Gem Of The…', 'Scotty Cranmer', '12/18/2018', 'video-list-2.jpg'),
    new videoObj('Travel Health Useful Medical Information…', 'Scotty Cranmer', '12/18/2018', 'video-list-3.jpg'),
    new videoObj('Cheap Airline Tickets Great Ways To Save', 'Emily Harper', '12/18/2018', 'video-list-4.jpg'),
    new videoObj('Take A Romantic Break In A Boutique Hotel', 'Ethan Owen', '12/18/2018', 'video-list-5.jpg'),
    new videoObj('Choose The Perfect Accommodations', 'Lydia Perez', '12/18/2018', 'video-list-6.jpg'),
    new videoObj('Cruising Destination Ideas', 'Timothy Austin', '12/18/2018', 'video-list-7.jpg'),
    new videoObj('Train Travel On Track For Safety', 'Scotty Cranmer', '12/18/2018', 'video-list-8.jpg')
  ]
  return (
    <div>
      <Header />
      <Video />
      <VideoInfo />
      <Comments commentAry={commentAry} />
    </div>
  );
}

export default App;
